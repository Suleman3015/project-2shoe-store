import React, { Component } from "react";

import Card from "./Card";

import img1 from "../images/shoesimg1.jpeg";
import img2 from "../images/shoesimg2.jpeg";
import img3 from "../images/shoesimg3.jpeg";

class Cards extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <Card
              link={"/launch/air-jordan-3-valor-blue"}
              imgsrc={img1}
              title="VALOUR BLUE"
            />
          </div>
          <div className="cold-md-4">
            <Card
              link={"/launch/air-jordan-3-valor-blue"}
              imgsrc={img3}
              title="RACER BLUE"
            />
          </div>
          <div className="col-md-4">
            <Card
              link={"launch/air-jordan-1-zoom-racer-blue"}
              imgsrc={img2}
              title="VALOUR BLUE"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
