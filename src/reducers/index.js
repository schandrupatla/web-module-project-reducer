import {
  ADD_ONE,
  APPLY_NUMBER,
  CHANGE_OPERATION,
  CLEAR_DISPLAY,
  MEMORY_ACTION,
  MEMORY_ADD,
  MEMORY_RELEASE,
  MEMORY_CLEAR,
} from "./../actions";

export const initialState = {
  total: 0,
  operation: "+",
  memory: 0,
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "*":
      return num1 * num2;
    case "-":
      return num1 - num2;
  }
};

// const operateMemory =(total, payload, operation, memory) => {
//     switch(operation){
//         case("M+"):
//         return {[memory]:memory+total};
//         case("MR"):
//         return{total:total+memory};
//         case("MC"):
//         return{memory:0};
//     }
// }

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ONE:
      return {
        ...state,
        total: state.total + 1,
      };

    case APPLY_NUMBER:
      return {
        ...state,
        total: calculateResult(state.total, action.payload, state.operation),
      };

    case CHANGE_OPERATION:
      return {
        ...state,
        operation: action.payload,
      };
    case CLEAR_DISPLAY:
      return {
        total: 0,
      };

    // case(MEMORY_ACTION):
    // return({
    //     ...state, total:operateMemory(state.total, action.payload, state.operation, state.memory)
    // })
    case MEMORY_ADD:
      return { ...state, memory: action.payload };

    case MEMORY_RELEASE:
      return {
        ...state,
        total: calculateResult(state.memory, state.total, state.operation),
      };

    case MEMORY_CLEAR:
      return { ...state, memory: 0 };

    default:
      return state;
  }
};

export default reducer;
