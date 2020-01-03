import React from "react";

export const UserContext = React.createContext();

export const UserContextProvider = props => {
  const initialState = {
    username: "",
    name: "",
    city: "",
    avatar: "",
    bio: "",
    portfolio: [],
    trades: [],
    followers: [],
    following: []
  };

  const reducer = (state, action) => {
    return {
      ...state,
      ...action
    };
  };

  const [user, setUser] = React.useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
