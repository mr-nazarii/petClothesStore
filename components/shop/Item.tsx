import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { addToTheCart } from "../../store/slices/itemSlicer";
import styles from "../../styles/Shop/_Item.module.scss";

interface ItemType {
  sale?: boolean;
  id: number;
  src: string;
  title: string;
  price: string;
  oldPrice?: string | boolean;
  color: any[];
}

export const Item = ({
  sale,
  id,
  title,
  price,
  src,
  oldPrice,
  color,
}: ItemType) => {
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
              <div className={styles.prices}>
                {color
                  ? color.map((col: any) => (
                      <span
                        key={col}
                        className={styles.color}
                        style={{ backgroundColor: `${col}` }}
                      />
                    ))
                  : null}
              </div>
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
            <Link href={id.toString()}>
              <a
                className={styles.button}
                // onClick={() =>
                //   dispatch(
                //     addToTheCart({
                //       sale: sale,
                //       id: id,
                //       src: src,
                //       title: title,
                //       price: price,
                //       oldPrice: oldPrice,
                //     })
                //   )
                // }
              >
                DETAILS
              </a>
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
};
