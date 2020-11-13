import React from "react";
import CardBody from "../CardBody";
import CardBtn from "../CardBtn";
import CardImg from "../CardImage";
import "./style.css";

function Card() {
  return (
    <div>
      <CardImg />
      <CardBody />
        style={{ opacity: 1 }}
        data-value="back"
    </div>
  );
}

export default Card;
