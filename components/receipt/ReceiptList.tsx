import Image from "next/image";
import React from "react";
import styles from "../../styles/Receipt/Receipt.module.scss";

export const ReceiptList = () => {
  return (
    <div className={styles.receipt}>
      <div className={styles.receiptItem}>
        <div className={styles.receiptItem__image}>
          <Image
            src="/images/aboutPage/dogAbout.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <p>1</p>
        <p>Sunny weather</p>
        <p>$14.50</p>
      </div>
    </div>
  );
};
