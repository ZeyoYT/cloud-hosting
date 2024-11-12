"use client"
import { useEffect, useState } from 'react';

export function useAuth() {
  const [isUserLoggedIn, setIsLoggedIn] = useState(() => {
    if (typeof window !== "undefined") {
      return !!localStorage.getItem('user');
    }
    return false;
  });

  useEffect(() => {
    const updateAuthStatus = () => {
      setIsLoggedIn(!!localStorage.getItem('user'));
    };

    // Listen for storage events from other tabs or windows
    window.addEventListener('storage', updateAuthStatus);
    window.addEventListener('login', updateAuthStatus);
    window.addEventListener('logout', updateAuthStatus);

    return () => {
      window.removeEventListener('storage', updateAuthStatus);
      window.removeEventListener('login', updateAuthStatus);
      window.removeEventListener('logout', updateAuthStatus);
    };
  }, []);

  return isUserLoggedIn;
}
