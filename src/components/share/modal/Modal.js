import React from "react";
import styles from "./modal.module.css";

const Modal = (props) => {
  const selectedCoin = props.coins.find((item) => item.id === props.coinId);

  return (
    <div className={styles.modal}>
      <div className={styles.imgdiv}>
        <img src={selectedCoin.image} />
      </div>
      <div className={styles.pdiv}>
        <p>
          symbol: <span>{selectedCoin.symbol}</span>
        </p>
        <p>
          name: <span>{selectedCoin.name}</span>
        </p>
      </div>
      <div className={styles.pdiv}>
        <p>
          low_24h:
          <span style={{ color: "red" }}>
            {selectedCoin.low_24h.toLocaleString()} $
          </span>
        </p>
        <p>
          high_24h:
          <span style={{ color: "rgb(5, 200, 5)" }}>
            {selectedCoin.high_24h.toLocaleString()} $
          </span>
        </p>
      </div>
      <div className={styles.pdiv}>
        <p>
          current_price:
          <span>{selectedCoin.current_price.toLocaleString()} $</span>
        </p>
        <p>
          total_volume:
          <span>{selectedCoin.total_volume.toLocaleString()} $</span>
        </p>
      </div>
    </div>
  );
};

export default Modal;
