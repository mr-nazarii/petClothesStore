import Image from "next/image";
import React from "react";
import { Cart } from "../components/Cart";
import styles from "../styles/_Shop.module.scss";
import Select from "react-select";
import Link from "next/link";

const filter = [
  { value: "sale", label: "Sale" },
  { value: "high", label: "to High price" },
  { value: "low", label: "to Low price" },
];

const colors = [
  { value: "red", label: "Red" },
  { value: "green", label: "Green" },
  { value: "Yellow", label: "Yellow" },
];

const size = [
  { value: "xs", label: "XS" },
  { value: "s", label: "S" },
  { value: "m", label: "M" },
  { value: "l", label: "L" },
  { value: "xl", label: "XL" },
];

const customStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isFocused ? "gainsboro" : "white",
    color: state.isSelected ? "black" : "gray",
    padding: 20,
  }),

  singleValue: (provided: any, state: any) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};

const shop = () => {
  return (
    <div className={styles.shop}>
      <header className={styles.shop__header}>
        <Link href="/">
          <a>
            <h1>PET STYLE</h1>
          </a>
        </Link>
        <Cart>0</Cart>
      </header>

      <div className={styles.shop__filter}>
        <div className={styles.selectWrapper}>
          <span>Filter by: </span>
          <Select
            styles={customStyles}
            isSearchable={false}
            defaultValue={filter[1]}
            menuPosition="fixed"
            options={filter}
            className={styles.select}
          />
        </div>
        <div className={styles.selectWrapper}>
          <span>Color: </span>
          <Select
            isSearchable={false}
            styles={customStyles}
            defaultValue={colors[1]}
            menuPosition="fixed"
            options={colors}
            className={styles.select}
          />
        </div>

        <div className={styles.selectWrapper}>
          <span>Size: </span>
          <Select
            styles={customStyles}
            isSearchable={false}
            defaultValue={size[1]}
            menuPosition="fixed"
            options={size}
            className={styles.select}
          />
        </div>
      </div>
    </div>
  );
};

export default shop;
