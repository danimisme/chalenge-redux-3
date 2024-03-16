const initialState = {
  value: 0,
  show: true,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "counter/increment":
      return { ...state, value: state.value + 1 };
    case "counter/decrement":
      return { ...state, value: state.value - 1 };
    case "counter/increase":
      return { ...state, value: state.value + 10 };
    case "counter/togle":
      return { ...state, show: !state.show };
    default:
      return state;
  }
};

export const increment = () => ({ type: "counter/increment" });
export const decrement = () => ({ type: "counter/decrement" });
export const increase = () => ({ type: "counter/increase" });
export const toggle = () => ({ type: "counter/togle" });
export default counterReducer;
