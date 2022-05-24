import React from "react";
import styles from "./backdrop.module.css";

const BackDrop = (props) => {
  return <div className={styles.backdrop} onClick={props.clickHandler}></div>;
};

export default BackDrop;
