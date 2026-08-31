from pymongo import MongoClient
from pathlib import Path
import re
import ast

# ============================================
# MongoDB Connection
# ============================================

client = MongoClient("mongodb://localhost:27017/")

db = client["myntra"]

products_collection = db["products"]


# ============================================
# Find products.js
# ============================================

products_file = (
    Path(__file__).parent.parent
    / "src"
    / "data"
    / "products.js"
)

print("Reading:", products_file)


# ============================================
# Check if products.js exists
# ============================================

if not products_file.exists():
    print("ERROR: products.js file not found!")
    print("Expected location:", products_file)
    client.close()
    exit()


# ============================================
# Read products.js
# ============================================

content = products_file.read_text(encoding="utf-8")


# ============================================
# Remove JavaScript wrapper
# ============================================

content = content.replace("const products =", "", 1)

content = content.replace("export default products;", "", 1)


# ============================================
# Remove ONLY JavaScript comment lines
#
# IMPORTANT:
# Do NOT use //.* because image URLs contain
# https:// and would get destroyed.
# ============================================

content = re.sub(
    r"^\s*//.*$",
    "",
    content,
    flags=re.MULTILINE
)


# ============================================
# Convert JavaScript object keys to Python keys
#
# Example:
#
# id: 1
#
# becomes:
#
# "id": 1
# ============================================

content = re.sub(
    r'(\{|,)\s*([A-Za-z_][A-Za-z0-9_]*)\s*:',
    r'\1 "\2":',
    content
)


# ============================================
# Convert JavaScript array into Python data
# ============================================

try:
    products = ast.literal_eval(
        content.strip().rstrip(";")
    )

except Exception as e:
    print("ERROR: Could not convert products.js")
    print(e)
    client.close()
    exit()


# ============================================
# Check number of products
# ============================================

print(f"Found {len(products)} products")


# ============================================
# Delete existing products
#
# This prevents duplicate products if you
# run the script again.
# ============================================

print("Removing old products...")

products_collection.delete_many({})


# ============================================
# Insert products into MongoDB
# ============================================

if products:

    result = products_collection.insert_many(products)

    print(
        f"Inserted {len(result.inserted_ids)} products successfully!"
    )

else:

    print("No products found.")


# ============================================
# Verify MongoDB
# ============================================

count = products_collection.count_documents({})

print(f"Products in MongoDB: {count}")


# ============================================
# Close MongoDB connection
# ============================================

client.close()

print("Done!")