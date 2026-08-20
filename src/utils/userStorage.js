/* =====================================================
   CURRENT USER
===================================================== */

export const getCurrentUser = () => {
  try {
    return JSON.parse(
      localStorage.getItem("currentUser")
    ) || null;
  } catch {
    return null;
  }
};


/* =====================================================
   USER KEY
===================================================== */

export const getUserKey = () => {
  const user = getCurrentUser();

  if (!user || !user.email) {
    return null;
  }

  return user.email
    .trim()
    .toLowerCase()
    .replace(/\./g, "_")
    .replace(/@/g, "_at_");
};


/* =====================================================
   USER-SPECIFIC STORAGE KEY
===================================================== */

export const userStorageKey = (key) => {
  const userKey = getUserKey();

  if (!userKey) {
    return null;
  }

  return `${key}_${userKey}`;
};


/* =====================================================
   GET USER DATA
===================================================== */

export const getUserData = (key, defaultValue = []) => {
  const storageKey = userStorageKey(key);

  if (!storageKey) {
    return defaultValue;
  }

  try {
    return (
      JSON.parse(
        localStorage.getItem(storageKey)
      ) ?? defaultValue
    );
  } catch {
    return defaultValue;
  }
};


/* =====================================================
   SAVE USER DATA
===================================================== */

export const saveUserData = (key, value) => {
  const storageKey = userStorageKey(key);

  if (!storageKey) {
    return;
  }

  localStorage.setItem(
    storageKey,
    JSON.stringify(value)
  );
};


/* =====================================================
   REMOVE USER DATA
===================================================== */

export const removeUserData = (key) => {
  const storageKey = userStorageKey(key);

  if (!storageKey) {
    return;
  }

  localStorage.removeItem(storageKey);
};