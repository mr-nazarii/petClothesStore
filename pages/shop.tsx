import React from "react";
import { Filter } from "../components/Filter";
import { Header } from "../components/shop/Header";
import { Item } from "../components/shop/Item";
import { ItemsGrid } from "../components/shop/ItemsGrid";
import { useAppSelector } from "../hooks/hooks";
import { RootState } from "../store/store";

const Shop = () => {
  const { items } = useAppSelector((state: RootState) => state.item);
  return (
    <>
      <Header />
      <Filter />
      <ItemsGrid>
        {items.map(
          ({ id, title, price, src, sale = false, oldPrice = false }) => (
            <Item
              key={id}
              id={id}
              title={title}
              price={price}
              src={src}
              sale={sale}
              oldPrice={oldPrice}
            />
          )
        )}
      </ItemsGrid>
    </>
  );
};

export default Shop;
