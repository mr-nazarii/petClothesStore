import Image from "next/image";
import React from "react";
import { testRender } from "../../data/renderdata.";
import styles from "../../styles/Receipt/_Receipt.module.scss";
import { ReciptItem } from "./ReciptItem";

export const ReceiptList = () => {
  let amount = 0;

  return (
    <div className={styles.receipt}>
      {testRender.map(({ id, title, price, src }) => {
        amount += +price;

        return (
          <ReciptItem key={id} id={id} title={title} price={price} src={src} />
        );
      })}
      <div className={styles.details}>
        <a className={styles.button}>Buy</a>
        <div className={styles.amount}>
          <p>Initial amount: ${amount}</p>
          <p>Tax: $2,00</p>
          <p>Final: ${amount + 2}</p>
        </div>
      </div>
    </div>
  );
};
