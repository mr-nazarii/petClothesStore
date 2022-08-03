import Image from "next/image";
import React from "react";
import styles from "../../styles/Shop/_Item.module.scss";

interface ItemType {
  sale?: boolean;
  id: number;
  src: string;
  title: string;
  price: string;
  oldPrice?: string | boolean;
}

export const Item = ({ sale, id, title, price, src, oldPrice }: ItemType) => {
  return (
    <>
      {id && title && price && src ? (
        <div className={styles.item}>
          <div className={styles.item__img}>
            {sale ? <span className={styles.sale}>SALE</span> : null}
            <Image src={src} layout="fill" objectFit="cover" alt="dog1" />
          </div>
          <div className={styles.details}>
            <div>
              <p className={styles.details__title}>{title}</p>

              <div className={styles.prices}>
                {oldPrice ? (
                  <>
                    <p className={styles.prices__old}>${oldPrice}</p>
                    <p className={styles.prices__new}>${price}</p>
                  </>
                ) : (
                  <>
                    <p className={styles.prices__standard}>${price}</p>
                  </>
                )}
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
      ) : null}
    </>
  );
};
