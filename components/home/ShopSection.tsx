import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../styles/Home/_ShopSection.module.scss";

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
      <Link href="/shop">
        <a className={styles.button}>TO THE SHOP</a>
      </Link>
    </div>
  );
};
