import React, { useContext } from "react";

type DefaultValue = Symbol;
const defaultValue: DefaultValue = Symbol("Context default value");

export const createSafeContext = <T>() => {
  return React.createContext<T | DefaultValue>(defaultValue);
};

export const useSafeContext = <T>(context: React.Context<T | DefaultValue>) => {
  const value = useContext(context);

  if (value === defaultValue) {
    throw new Error("No value provided for context");
  }

  return value as T;
};
