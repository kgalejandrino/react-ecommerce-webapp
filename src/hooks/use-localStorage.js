import { useEffect, useState } from "react";

const useLocalStorage = (key) => {
  const [storedValue, setStoredValue] = useState({});

  useEffect(() => {
    const value = JSON.parse(localStorage.getItem(key));
    if (value) {
      setStoredValue(value);
    }
  }, [key]);

  return { storedValue };
};

export default useLocalStorage;
