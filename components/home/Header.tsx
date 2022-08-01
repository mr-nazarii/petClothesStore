import Image from "next/image";
import React from "react";
import styles from "../../styles/Home/_Header.module.scss";

export const Header = () => {
  return (
    <div className={styles.header}>
      <Image
        alt="dog"
        src={"/images/aboutPage/dogHeader.jpg"}
        layout="fill"
        objectFit="cover"
        className={styles.img}
      />
      <div className={styles.wrapper}>
        <h3 className={styles.subtitle}>Welcome To</h3>
        <h1 className={styles.title}>PET STYLE</h1>
        <a href="#about" className={styles.button}>
          ABOUT US
        </a>
      </div>
    </div>
  );
};
