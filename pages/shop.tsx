import React from "react";
import { Filter } from "../components/Filter";
import { Header } from "../components/shop/Header";
import { Item } from "../components/shop/Item";
import { ItemsGrid } from "../components/shop/ItemsGrid";

const shop = () => {
  return (
    <>
      <Header />
      <Filter />
      <ItemsGrid>
        <Item />
        <Item />
        <Item />
        <Item />
      </ItemsGrid>
    </>
  );
};

export default shop;
