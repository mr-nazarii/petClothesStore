import React from "react";
import styles from "../../styles/Shop/_ItemsGrid.module.scss";

export const ItemsGrid = (props: any) => {
  return <div className={styles.gridWrapper}>{props.children}</div>;
};
