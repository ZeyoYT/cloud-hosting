// lib/auth.js
export const isUserLoggedIn = () => {
  console.log(document.cookie);
  const token = document.cookie.split('; ').find(row => row.startsWith('authToken='));
  if (token) {
    const decodedToken = jwt.decode(token.split('=')[1]);
    // Check if token is not expired and valid
    if (decodedToken && decodedToken.exp > Date.now() / 1000) {
      return true;
    }
  }
  return false;
};

  