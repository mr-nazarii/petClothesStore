import Image from "next/image";
import React from "react";
import styles from "../../styles/Receipt/_Receipt.module.scss";
import { ReciptItem } from "./ReciptItem";

const testRender = [
  {
    id: 1,
    title: "Sunny weather",
    price: "10.14",
    src: "/images/aboutPage/dogAbout.jpg",
  },
  {
    id: 2,
    title: "Sunny Dog",
    price: "20.24",
    src: "/images/aboutPage/dogHeader.jpg",
  },
  {
    id: 3,
    title: "Beast weather",
    price: "30.54",
    src: "/images/aboutPage/dogShop.jpg",
  },
];

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
          <p>Final: : ${amount + 2}</p>
        </div>
      </div>
    </div>
  );
};
