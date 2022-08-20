import Image from "next/image";
import React, { useState } from "react";
import Select from "react-select";
import { Header } from "../components/shop/Header";
import { customStyles, sizeShop } from "../data/filter.data";
import { testRender } from "../data/renderdata.";
import { useAppDispatch } from "../hooks/hooks";
import { addToTheCart } from "../store/slices/itemSlicer";
import styles from "../styles/Shop/_ItemPage.module.scss";

export const getStaticPaths = () => {
  const paths = testRender.map((item: any) => {
    return {
      params: { id: item.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const item = testRender.filter((item) => item.id.toString() === id);

  return {
    props: {
      itemData: item[0],
    },
  };
};

const DetailsPage = ({ itemData }: any) => {
  console.log(itemData);
  const [item, setItem] = useState({ color: itemData.color[0] });
  const dispatch = useAppDispatch();

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <h3>{itemData.title}</h3>
          <div className={styles.img}>
            <Image
              src={itemData.src}
              layout="fill"
              objectFit="cover"
              alt="cart"
            />
          </div>
          <div className={styles.details}>
            <div className={styles.details__colors}>
              {itemData.color.map((el: any) => {
                if (el === item.color) {
                  return (
                    <span
                      className={styles.color}
                      style={{ backgroundColor: el, borderColor: "#4f4f4f" }}
                      key={el}
                      onClick={() =>
                        setItem({
                          ...item,
                          color: el,
                        })
                      }
                    />
                  );
                } else {
                  return (
                    <span
                      style={{ backgroundColor: el }}
                      className={styles.color}
                      key={el}
                      onClick={() =>
                        setItem({
                          ...item,
                          color: el,
                        })
                      }
                    />
                  );
                }
              })}
            </div>
            <Select
              styles={customStyles}
              isSearchable={false}
              defaultValue={sizeShop[0]}
              menuPosition="absolute"
              options={sizeShop}
              className={styles.select}
              isDisabled={false}
              onChange={(event) =>
                setItem({
                  ...item,
                  color: event?.value,
                })
              }
              menuPlacement="auto"
            />
          </div>
          {itemData.oldPrice ? (
            <div className={styles.prices}>
              <p className={styles.prices__old}>${itemData.oldPrice}</p>
              <p className={styles.prices__new}>${itemData.price}</p>
            </div>
          ) : (
            <div className={styles.prices}>
              <p className={styles.prices__standard}>${itemData.price}</p>
            </div>
          )}
          <div
            className={styles.button}
            onClick={() =>
              dispatch(
                addToTheCart({
                  sale: itemData.sale,
                  id: itemData.id,
                  src: itemData.src,
                  title: itemData.title,
                  price: itemData.price,
                  oldPrice: itemData.oldPrice,
                })
              )
            }
          >
            <Image
              src={"/images/icons/Cart.svg"}
              width="30"
              height="30"
              alt="cart"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
