import Image from "next/image";
import React from "react";
import styles from "../../styles/Receipt/_Receipt.module.scss";

export interface ReciptTypeProps {
  id: number;
  src: string;
  title: string;
  price: string;
}

export const ReciptItem = ({ id, title, price, src }: ReciptTypeProps) => {
  return (
    <>
      {id && title && price && src ? (
        <div className={styles.receiptItem}>
          <p>{id}</p>
          <div className={styles.receiptItem__image}>
            <Image src={src} layout="fill" objectFit="cover" alt="item" />
          </div>
          <p>{title}</p>
          <p>${price}</p>
        </div>
      ) : null}
    </>
  );
};
