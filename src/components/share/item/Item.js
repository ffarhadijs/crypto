import React, { useState } from "react";
import styles from "./item.module.css";

const Item = (props) => {
  return (
    <div className={styles.item} onClick={()=>props.clickHandler(props.data.id)}>
      <h3>{props.data.name}</h3>
      <img src={props.data.image} alt="itemImage" />
    </div>
  );
};

export default Item;
