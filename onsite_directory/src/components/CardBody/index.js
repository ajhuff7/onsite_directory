import React, { useContext } from "react";
import UserContext from "../../utils/userContext";

function CardBody() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h4>
        name: {user.name}
        phone: {user.phone}
        language: {user.language}
        dob: {user.dob}
        email: {user.email}
      </h4>
    </div>
  );
}

export default CardBody;
