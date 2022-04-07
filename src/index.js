import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./context/authContext/AuthContext";
import { MovieContextProvider } from "./context/movieContext/MovieContext";
import { SearchContextProvider } from "./context/searchContext/SearchContext";
import { CommentContextProvider } from "./context/commentContext/CommentContext";
import { TypeContextProvider } from "./context/typeContext/TypeContext";
import {
  UtilContext,
  UtilContextProvider,
} from "./context/utilContext/UtilContext";
import { RateContextProvider } from "./context/rateContext/RateContext";
import { CustomToast } from "./styles/globalStyles";
import { customToast } from "./data/options";

ReactDOM.render(
  <AuthContextProvider>
    <MovieContextProvider>
      <SearchContextProvider>
        <CommentContextProvider>
          <TypeContextProvider>
            <UtilContextProvider>
              <RateContextProvider>
                <CustomToast {...customToast} />
                <App />
              </RateContextProvider>
            </UtilContextProvider>
          </TypeContextProvider>
        </CommentContextProvider>
      </SearchContextProvider>
    </MovieContextProvider>
  </AuthContextProvider>,

  document.getElementById("root")
);
