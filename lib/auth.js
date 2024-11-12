import { useEffect, useState } from 'react';

export function useAuth() {
  const [isUserLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);
  }, []);

  return isUserLoggedIn;
}