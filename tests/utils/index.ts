

import { anyName, anyNumber } from '../faker'

type AnyType = "name" | "number"

export const getOrDefault = (value, defaultValue) => {
  if (value === null || value === undefined) {
    return defaultValue;
  }
  return value
}

export const getOrAnyDefault = (value, type: AnyType) => {
  if (type === "name") {
    return getOrDefault(value, anyName());
  }
  if (type === "number") {
    return getOrDefault(value, anyNumber());
  }
  return "xixi"
}

