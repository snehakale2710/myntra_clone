from flask import Flask, jsonify
from flask_cors import CORS
app = Flask(__name__)
# Allow React frontend to communicate with Flask
CORS(app)
@app.route("/")
def home():
    return jsonify({
        "success": True,
        "message": "Myntra Clone Backend is running!"
    })
@app.route("/api/test")
def test():
    return jsonify({
        "success": True,
        "message": "Backend API is working!"
    })
if __name__ == "__main__":
    app.run(debug=True)