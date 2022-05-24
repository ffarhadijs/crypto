import React, { useEffect, useState } from "react";
import loading from "../../gif/spinner.gif";
//functions
import getCoins from "../../services/api";
//components
import Item from "../share/item/Item";
import Modal from "../share/modal/Modal";
import BackDrop from "../share/backDrop/BackDrop";
//css
import styles from "./main.module.css";


const Main = () => {
  const [coins, setCoins] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [coinId, setCoinId] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      setCoins(await getCoins());
    };

    fetchApi();
  }, []);

  const clickHandler = (id) => {
    setIsShow(true);
    setCoinId(id);
  };
  const closeModal = () => {
    setIsShow(false);
  };
  const changeHandler = (e) => {
    setSearch(e.target.value);
  };
  const searchedItems = coins.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    
    <div className={styles.main}>
      {coins.length ? (
          <input
            className={styles.input}
            type="text"
            name="search"
            placeholder="Search..."
            value={search}
            onChange={changeHandler}
          />
        ):null}
      <div className={styles.itemslist}>
        {searchedItems.map((item) => (
          <Item
            data={item}
            key={item.id}
            clickHandler={() => clickHandler(item.id)}
          />
        ))}
        {isShow && <BackDrop clickHandler={closeModal} />}
        {isShow && <Modal coinId={coinId} coins={coins}/>}
        {!coins.length && <img src={loading} />}
        
      </div>
    </div>
    
  );
};

export default Main;
