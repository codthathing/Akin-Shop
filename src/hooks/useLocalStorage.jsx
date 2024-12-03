import { useState, useEffect } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(() => {
    const provider = localStorage.getItem(key);
    return provider !== null ? JSON.parse(provider) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};