import React, { useEffect, useState } from "react";

export const useDebouncing = (value = "", delay = 500) => {
  const [debounc, setDebounc] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounc(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return debounc;
};
