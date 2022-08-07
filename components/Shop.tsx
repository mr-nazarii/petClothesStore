import Image from "next/image";
import React from "react";
import styles from "../styles/componentStyles/_Cart.module.scss";

export const Shop = () => {
  return (
    <div className={styles.cart}>
      <Image
        src={"/images/icons/Shop.svg"}
        layout="fill"
        objectFit="contain"
        alt="cart"
      />
    </div>
  );
};
