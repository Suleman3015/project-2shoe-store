import React from "react";
import "./card-style.css";

const Cards = (props) => {
  return (
    <div className="card text-center shadow">
      <div className="overflow">
        <img src={props.imgsrc} alt="image" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title"> {props.title} </h4>
        <p className="card-text text-secondary">
          lorem ds asd fewf fef efe er wef fewf wefew fewf wefwe fwef wef
        </p>
        <a href={props.link} className="btn btn-outline-success">
          Buy Now
        </a>
      </div>
    </div>
  );
};
export default Cards;
