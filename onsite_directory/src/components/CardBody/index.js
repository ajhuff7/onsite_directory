import React from "react";
import "./style.css";



function CardBody() {

  return (
    <div>
      <div class="container">
        <div class="row">
          <div>
            <img className="card-img" src={employee.image} alt="user thumbnail" />
            {!employee.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
          </div>
          <div class="col">
           {employee.name}
          </div>
          <div class="col">
            {employee.email}
          </div>
        </div>
        <div class="col">
          {employee.language}
        </div>
        <div class="col">
          {employee.phone}
        </div>
        <div class="col">
          {employee.dob}
        </div>
      </div>
    </div>
  );
}

export default CardBody;
