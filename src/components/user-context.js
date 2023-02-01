import React from "react";

const UserContext = React.createContext({
  users: [],
  onAddUser: () => {},
});

export default UserContext;
