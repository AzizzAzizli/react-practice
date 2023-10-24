import React, { useState } from "react";
import styles from "./Slider.module.css";
import { Card } from "../../components/cards/Card";
import data from "../../data/data.json";

export const SliderTask = () => {
  let [sliderCount, setSliderCount] = useState(0);

  return (
    <>
      <div >
        <div className={`${styles.margin} `}>
          <button className={`${styles.btn} `}
            onClick={() =>
              setSliderCount((prev) => (prev > 0 ? prev - 1 : data.length - 1))
            }
          >
            Prev
          </button>
          <Card key={"card"+sliderCount} {...data[sliderCount]}/>
          <button className={`${styles.btn} `}
            onClick={() =>
              setSliderCount((next) => (next < data.length - 1 ? next + 1 : 0))
            }
          >
            Next 
          </button>
        </div>
     
        {/* {data.map((item, index) => (
        <Card key={"card" + index} {...item} />
      ))} */}
        {/* {data.map((item,index)=><Card key={"card"+index}  {...item} />)} */}
      </div>
    </>
  );
};
