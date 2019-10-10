import * as type from "../actionTypes";

export function add1(text) {
  return {
    type: type.ADD1,
    text
  };
}

export function add10(text) {
  return {
    type: type.ADD10,
    text
  };
}
