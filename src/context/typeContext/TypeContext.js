import TypeReducer from "./TypeReducer";
import { createContext, useReducer } from "react";

const initialState = {
  typesLoading: false,
  types: [],
  typesError: null,
};

export const TypeContext = createContext(initialState);

export const TypeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TypeReducer, initialState);

  return (
    <TypeContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </TypeContext.Provider>
  );
};
