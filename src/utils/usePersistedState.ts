"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type IResponse<T> = [T, Dispatch<SetStateAction<T>>];

export function usePersistedState<T>(
  key: string,
  initialState: T
): IResponse<T> {
  const [theme, settheme] = useState(() => {
    const storageValue = localStorage.getItem(key);

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(theme));
  }, [theme, key]);

  return [theme, settheme];
}
