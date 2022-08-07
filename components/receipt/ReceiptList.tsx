import Image from "next/image";
import React from "react";
import { testRender } from "../../data/renderdata.";
import { useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../store/store";
import styles from "../../styles/Receipt/_Receipt.module.scss";
import { ReciptItem } from "./ReciptItem";

export const ReceiptList = () => {
  let amount = 0;
  const { itemList } = useAppSelector((state: RootState) => state.item.cart);

  return (
    <div className={styles.receipt}>
      {itemList.map(({ id, title, price, src }) => {
        amount += +price;

        return (
          <ReciptItem key={id} id={id} title={title} price={price} src={src} />
        );
      })}
      <div className={styles.details}>
        <a className={styles.button}>Buy</a>
        <div className={styles.amount}>
          <p>Initial amount: ${Number(amount.toFixed(6))}</p>
          <p>Tax: $2,00</p>
          <p>Final: ${Number(amount.toFixed(6)) + 2}</p>
        </div>
      </div>
    </div>
  );
};
