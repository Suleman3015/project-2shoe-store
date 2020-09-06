import React from "react";
import Image from "../images/nike.png";
import styles from "./timeline.module.css";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

function Head() {
  return (
    <div className={styles.head}>
      <div className={styles.welcome}>
        <h1> Welcome To The Shoe Store </h1>
        <Button href="/launch" variant="contained" color="secondary">
          Products
        </Button>
      </div>
      <img className={styles.photo} src={Image} alt="nike-shoe" />
    </div>
  );
}

export default Head;
