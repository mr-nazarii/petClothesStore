import React, { useEffect, useState } from "react";
import { Filter } from "../components/Filter";
import { Header } from "../components/shop/Header";
import { Item } from "../components/shop/Item";
import { ItemsGrid } from "../components/shop/ItemsGrid";
import { useAppSelector } from "../hooks/hooks";
import { RootState } from "../store/store";

const Shop = () => {
  const { items } = useAppSelector((state: RootState) => state.item);

  const [filter, setFilter] = useState({
    filter: "sale",
    size: "all",
    colors: "all",
  });

  const [shopItems, setShopItems] = useState(items);

  const renderItems = () => {
    let copy = [...shopItems];

    if (filter.filter === "sale") {
      let sale = copy.sort((a, b) => Number(a.sale) - Number(b.sale)).reverse();
      setShopItems(sale);

      if (filter.colors === "all") {
        setShopItems(sale);
      } else {
        const newColor = copy.filter((el: any) =>
          el.color.includes(filter.colors)
        );
        setShopItems(newColor);
      }
    } else if (filter.filter == "low") {
      copy.sort((a, b) => Number(a.price) - Number(b.price));
      setShopItems(copy);
    } else if (filter.filter == "high") {
      copy.sort((a, b) => Number(a.price) - Number(b.price));
      setShopItems(copy.reverse());
    }
  };

  useEffect(() => {
    console.log(filter);
    renderItems();
  }, [filter]);

  return (
    <>
      <Header />
      <Filter setFilter={setFilter} filterState={filter} />
      <ItemsGrid>
        {shopItems.map(
          ({
            id,
            title,
            price,
            src,
            sale = false,
            oldPrice = false,
            color,
          }) => (
            <Item
              key={id}
              id={id}
              title={title}
              price={price}
              src={src}
              sale={sale}
              oldPrice={oldPrice}
              color={color}
            />
          )
        )}
      </ItemsGrid>
    </>
  );
};

export default Shop;

// shopItems.map(
//   ({ id, title, price, src, sale = false, oldPrice = false, color }) => (
//     <Item
//       key={id}
//       id={id}
//       title={title}
//       price={price}
//       src={src}
//       sale={sale}
//       oldPrice={oldPrice}
//       color={color}
//     />
//   )
// );
