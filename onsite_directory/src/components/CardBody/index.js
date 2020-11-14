import React, { useContext } from "react";
import UserContext from "../../utils/userContext";

function CardBody() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <div class="wrapper">
        <div class="row">
          <div>
            <img className="card-img" src={user.image} alt="user thumbnail" />
            {!user.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
          </div>
          <div class="col">
           {user.name}
          </div>
          <div class="col">
            email: {user.email}
          </div>
        </div>
        <div class="col">
          language: {user.language}
        </div>
        <div class="col">
          phone: {user.phone}
        </div>
        <div class="col">
          dob: {user.dob}
        </div>
      </div>
    </div>
  );
}

export default CardBody;
