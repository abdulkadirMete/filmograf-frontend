import SearchReducer from "./SearchReducer";
import { createContext, useReducer } from "react";

const initialState = {
  searchLoading: false,
  searchResults: [],
  // searchPhrase: "",
  searchError: null,
};

export const SearchContext = createContext(initialState);

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, initialState);

  return (
    <SearchContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
