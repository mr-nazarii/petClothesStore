import Image from "next/image";
import React from "react";
import styles from "../../styles/Shop/_Item.module.scss";

export const Item = () => {
  return (
    <div className={styles.item}>
      <div className={styles.item__img}>
        <Image
          src={"/images/aboutPage/dogAbout.jpg"}
          layout="fill"
          objectFit="cover"
          alt="dog1"
        />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.details__title}>Sunny Weather</p>

          <div className={styles.prices}>
            <p className={styles.prices__old}>$44.80</p>
            <p className={styles.prices__new}>$14.80</p>
          </div>
        </div>

        <a className={styles.button}>
          <Image
            src={"/images/icons/Cart.svg"}
            width="30"
            height="30"
            alt="cart"
          />
        </a>
      </div>
    </div>
  );
};
