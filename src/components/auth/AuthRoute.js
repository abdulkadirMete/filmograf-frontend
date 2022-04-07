import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/authContext/AuthContext";

export function AuthRoute({ children }) {
  const { user, redirectLock } = useContext(AuthContext);
  let location = useLocation();
  console.log(redirectLock);
  if (user && redirectLock) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}
