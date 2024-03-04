/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer, useState } from "react";
import { useJwt } from "react-jwt";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
  error: null,
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };

    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };

    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };

    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  const strToken = JSON.stringify(state.user);
  const { decodedToken, isExpired } = useJwt(strToken);

  const userId = decodedToken?.id;
  const username = decodedToken?.username;
  const email = decodedToken?.email;
  const isAdmin = decodedToken?.isAdmin;
  console.log('isAdmin==', isAdmin)

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        userId,
        username,
        email,
        isAdmin,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};