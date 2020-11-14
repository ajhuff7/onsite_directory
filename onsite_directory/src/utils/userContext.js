import React from "react";

const UserContext = React.createContext({
  firstname: "",
  lastname: "",
  email: "",
  language: "",
  image: "",
  handleBtnClick: () => {}
});

export default UserContext;

