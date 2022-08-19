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

  const colors = (prevState: any, origin: any) => {
    if (filter.colors === "all") {
      setShopItems(prevState);
    } else {
      let colored = origin.filter((item: any) =>
        item.color.includes(filter.colors)
      );
      setShopItems(colored);
    }
  };

  const renderItems = () => {
    let copy = [...items];

    let sale = copy.sort((a, b) => Number(a.sale) - Number(b.sale)).reverse();

    if (filter.filter === "sale") {
      setShopItems(sale);
      colors(sale, copy);
    } else if (filter.filter == "low") {
      let sorted = copy.sort((a, b) => Number(a.price) - Number(b.price));
      setShopItems(sorted);
      colors(sorted, copy);
    } else if (filter.filter == "high") {
      let sorted = copy.sort((a, b) => Number(a.price) - Number(b.price));
      setShopItems(sorted.reverse());
      colors(sorted, copy);
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
