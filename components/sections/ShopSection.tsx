import Image from "next/image";
import React from "react";
import styles from "../../styles/_ShopSection.module.scss";

export const ShopSection = () => {
  return (
    <div className={styles.shopSection}>
      <Image
        alt="dog"
        src={"/images/aboutPage/dogShop.jpg"}
        layout="fill"
        objectFit="cover"
        className={styles.img}
      />
      <p className={styles.paragraph}>
        Over 1000 of clothes for every taste, and size.
      </p>
      <a href="#link" className={styles.button}>
        TO THE SHOP
      </a>
    </div>
  );
};
