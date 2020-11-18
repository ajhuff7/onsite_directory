import React from "react";
import "./style.css";



function CardBody(props) {

  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col">
            <img className="card-img" src={props.image} alt= {props.name} />
          </div>
          <div class="col text-white">
            {props.name}
          </div>
          <div class="col text-info">
            {props.email}
          </div>
          <div class="col text-info">
            {props.language}
          </div>
          <div class="col text-info">
            {props.phone}
          </div>
          <div class="col text-info">
            {props.dob}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardBody;
