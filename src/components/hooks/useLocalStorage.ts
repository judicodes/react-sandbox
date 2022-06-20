import { useState } from "react";

function useLocalStorage<T>(key: string, initialValue: T) {
  const [localStorageValue, setLocalStorageValue] = useState(() =>
    getLocalStorageValue(key, initialValue)
  );

  const setValue = (value: string | Function) => {
    const valueToStore =
      value instanceof Function ? value(localStorageValue) : value;
    setLocalStorageValue(value);
    localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [localStorageValue, setValue];

  function getLocalStorageValue(key: string, initialValue: T) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  }
}

export default useLocalStorage;
