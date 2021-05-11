export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const MEMORY_ACTION = "MEMORY_ACTION";
export const MEMORY_ADD = "MEMORY_ADD";
export const MEMORY_RELEASE = "MEMORY_RELEASE";
export const MEMORY_CLEAR = "MEMORY_CLEAR";

export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};
export const changeOperation = (operator) => {
  return { type: CHANGE_OPERATION, payload: operator };
};
export const clearDisplay = () => {
  return { type: CLEAR_DISPLAY };
};

export const memoryAction = (mem) => {
  return { type: MEMORY_ACTION, payload: mem };
};

export const memoryAdd = (displayValue) => {
  return { type: MEMORY_ADD, payload: displayValue };
};

export const memoryRelease = () => {
  return { type: MEMORY_RELEASE };
};
export const memoryClear = () => {
  return { type: MEMORY_CLEAR };
};
