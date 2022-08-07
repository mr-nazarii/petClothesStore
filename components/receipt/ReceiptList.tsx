import Image from "next/image";
import React from "react";
import { testRender } from "../../data/renderdata.";
import { useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../store/store";
import styles from "../../styles/Receipt/_Receipt.module.scss";
import { ReciptItem } from "./ReciptItem";

export const ReceiptList = () => {
  let amount = 0;
  const { itemList, itemsInCart } = useAppSelector(
    (state: RootState) => state.item.cart
  );

  return (
    <div className={styles.receipt}>
      <p className={styles.totalItems}>
        Total Items in the cart: {itemsInCart}
      </p>

      {itemList.length > 0 ? (
        itemList.map(({ id, title, price, src }) => {
          amount += +price;

          return (
            <ReciptItem
              key={Math.floor(id * Math.random() * Date.now())}
              id={id}
              title={title}
              price={price}
              src={src}
            />
          );
        })
      ) : (
        <p className={styles.noItems}>No items in the cart</p>
      )}
      <div className={styles.details}>
        {itemList.length > 0 ? (
          <button className={styles.button}>Buy</button>
        ) : (
          <button className={styles.button} disabled>
            Buy
          </button>
        )}
        <div className={styles.amount}>
          <p>Initial amount: ${Number(amount.toFixed(6))}</p>
          <p>Tax: $2,00</p>
          <p>Final: ${Number(amount.toFixed(6)) + 2}</p>
        </div>
      </div>
    </div>
  );
};
