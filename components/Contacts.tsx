import Image from "next/image";
import React from "react";
import styles from "../styles/componentStyles/_Contact.module.scss";

export const Contacts = (props: any) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.img}>
        <Image
          src={props.src}
          layout="fill"
          objectFit="contain"
          alt="location"
        />
      </div>
      <p className={styles.contact}>{props.children}</p>
    </div>
  );
};
