import React from "react";
import Select from "react-select";
import { colors, customStyles, filter, size } from "../data/filter.data";
import styles from "../styles/componentStyles/_Filter.module.scss";

export const Filter = () => {
  return (
    <div className={styles.filter}>
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
  );
};
