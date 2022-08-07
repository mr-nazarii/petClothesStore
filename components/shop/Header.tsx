import Link from "next/link";
import React from "react";
import { Cart } from "../Cart";
import styles from "../../styles/Shop/_Header.module.scss";
import { useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../store/store";

export const Header = () => {
  const { cart } = useAppSelector((state: RootState) => state.item);

  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <h1>PET STYLE</h1>
        </a>
      </Link>
      <Link href="cart">
        <a>
          <Cart>{cart.itemsInCart}</Cart>
        </a>
      </Link>
    </header>
  );
};
