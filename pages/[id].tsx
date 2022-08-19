import Image from "next/image";
import React from "react";
import { Header } from "../components/shop/Header";
import { testRender } from "../data/renderdata.";
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
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <h1>{itemData.title}</h1>
          <div className={styles.img}>
            <Image
              src={itemData.src}
              layout="fill"
              objectFit="cover"
              alt="cart"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsPage;

{
  /* <Image
                  src={"/images/icons/Cart.svg"}
                  width="30"
                  height="30"
                  alt="cart"
                /> */
}
