import RateReducer from "./RateReducer";
import { createContext, useReducer } from "react";

const initialState = {
  putRateLoading: false,
  putRateError: null,
  putRateMessage: "",
  fetchRateLoading: false,
  fetchRateError: null,
  rate: null,
};

export const RateContext = createContext(initialState);

export const RateContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(RateReducer, initialState);

  return (
    <RateContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </RateContext.Provider>
  );
};
