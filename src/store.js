import React, { createContext, useContext, useReducer } from "react";

// Initial state of your app
const initialState = {
  loginState: false,
  user: {},
  bookingLoading: false,
  count: 0,
  // add other state variables here
};

// Create context
const StoreContext = createContext();

// Export the useStore hook
export const useStore = () => useContext(StoreContext);

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    // Add other cases for different actions
    case "SET_USER":
      return { ...state, loginState: true, user: action.payload };
    default:
      return state;
  }
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
