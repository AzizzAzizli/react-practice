import React from "react";
import styles from "./CardTask.module.css";
import data from '../../data/data.json'

import { Card } from "../../components/cards/Card";

export const CardTask = () => {
  console.log(data);
  return (
    <>
      <div className={`${styles.margin}`}>
        {data.map((item,index)=><Card key={"card"+index}  {...item} />)}
       
      </div>
    </>
  );
};
