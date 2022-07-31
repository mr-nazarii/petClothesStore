import Image from "next/image";
import React from "react";
import styles from "../../styles/_Footer.module.scss";
import { Contacts } from "../Contacts";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <h3 className={styles.sectionTitle}>CONTACTS</h3>
      <Contacts src={"/images/icons/Location.svg"}>
        Mars, Center of Mars Ave, 1/23
      </Contacts>
      <Contacts src={"/images/icons/Phone.svg"}>
        +1 (12DA3) 456 78 9 10KDA
      </Contacts>
      <div className={styles.linksWrapper}>
        <Image
          src={"/images/icons/Twitter.svg"}
          width="66"
          height="66"
          alt="location"
        />
        <Image
          src={"/images/icons/Facebook.svg"}
          width="66"
          height="66"
          alt="location"
        />
        <Image
          src={"/images/icons/LinkedIn.svg"}
          width="66"
          height="66"
          alt="location"
        />
      </div>
    </div>
  );
};
