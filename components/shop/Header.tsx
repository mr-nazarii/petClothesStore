import Link from "next/link";
import React from "react";
import { Cart } from "../Cart";
import styles from "../../styles/Shop/_Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <h1>PET STYLE</h1>
        </a>
      </Link>
      <Cart>0</Cart>
    </header>
  );
};
