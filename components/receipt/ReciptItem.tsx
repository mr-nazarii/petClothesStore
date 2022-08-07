import Image from "next/image";
import React from "react";
import styles from "../../styles/Receipt/_Receipt.module.scss";

export interface ReciptTypeProps {
  id: number;
  src: string;
  title: string;
  price: string;
  sale?: boolean;
}

export const ReciptItem = ({
  id,
  title,
  price,
  src,
  sale,
}: ReciptTypeProps) => {
  return (
    <>
      {id && title && price && src ? (
        <div className={styles.receiptItem}>
          <p>{id}</p>
          <div className={styles.receiptItem__image}>
            <Image src={src} layout="fill" objectFit="cover" alt="item" />
          </div>
          <p className={styles.receiptItem__name}>{title}</p>
          {sale ? (
            <p className={styles.receiptItem__sale}>${price}</p>
          ) : (
            <p className={styles.receiptItem__price}>${price}</p>
          )}
        </div>
      ) : null}
    </>
  );
};
