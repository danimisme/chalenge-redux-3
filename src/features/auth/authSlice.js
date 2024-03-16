const initialState = {
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "auth/login":
      return { ...state, isAuth: true };
    case "auth/logout":
      return { ...state, isAuth: false };
    default:
      return state;
  }
};

export const login = () => ({ type: "auth/login" });
export const logout = () => ({ type: "auth/logout" });

export default authReducer;
