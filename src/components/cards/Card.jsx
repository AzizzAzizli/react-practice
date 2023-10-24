import React, { useState } from "react";
import styles from "./Card.module.css";
export const Card = (props) => {
  let [count, setCount] = useState(1);

  console.log(props);
  return (
    <>
      <div className={`${styles.card} `}>
        <div style={{backgroundColor: `${props.color}`}} className={`${styles.content}`}>{props.id}</div>
        <div className={`${styles.title}`}>Title:{props.name}</div>
        <div ><p  className={`${styles.price}`}>{(props.price*count).toFixed(2)}</p></div>
        <div className={`${styles.btn_group}`}>
          <button
            disabled={count === 1}
            onClick={() => setCount((prev) => (prev > 0 ? prev - 1 :setCount(1)))}
            className={`${styles.btn} ${count === 1 ? styles.disabled : ""}`}
          >
            -
          </button>
          <p className={`${styles.title}`}>{count}</p>
        <button disabled={count === props.stockCount}
            onClick={() => setCount((next) =>next<props.stockCount ? next + 1:setCount(props.stockCount))}
            className={`${styles.btn} ${count === props.stockCount ? styles.disabled : ""}`}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};
