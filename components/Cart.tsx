import Image from "next/image";
import React from "react";
import styles from "../styles/componentStyles/_Cart.module.scss";

export const Cart = (props: any) => {
  return (
    <div className={styles.cart}>
      <span className={styles.cart__amount}>{props.children}</span>
      <Image
        src={"/images/icons/Cart.svg"}
        layout="fill"
        objectFit="contain"
        alt="cart"
      />
    </div>
  );
};
