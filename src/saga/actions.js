import { ADD, PLUS } from "./actionTypes";

export function add(text) {
  return {
    type: ADD,
    text
  };
}

export function plus(text) {
  return {
    type: PLUS,
    text
  };
}
