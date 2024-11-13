// auth.js
"use client";
import { useEffect, useState } from 'react';

export function useAuth() {
  const [isUserLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem('user'));

  useEffect(() => {
    const updateAuthStatus = () => {
      setIsLoggedIn(!!localStorage.getItem('user'));
    };

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
