// auth.js
"use client";
import { useEffect, useState } from 'react';

export function useAuth() {
  const [isUserLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window !== "undefined") {
      const updateAuthStatus = () => {
        setIsLoggedIn(!!localStorage.getItem('user'));
      };

      // Initialize the auth status when the component mounts
      updateAuthStatus();

      // Listen for changes to auth status from other tabs or login/logout events
      window.addEventListener('storage', updateAuthStatus);
      window.addEventListener('login', updateAuthStatus);
      window.addEventListener('logout', updateAuthStatus);

      // Clean up the event listeners on component unmount
      return () => {
        window.removeEventListener('storage', updateAuthStatus);
        window.removeEventListener('login', updateAuthStatus);
        window.removeEventListener('logout', updateAuthStatus);
      };
    }
  }, []);

  return isUserLoggedIn;
}
