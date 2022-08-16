import React from "react";
import Select from "react-select";
import { colors, customStyles, filter, size } from "../data/filter.data";
import styles from "../styles/componentStyles/_Filter.module.scss";

export const Filter = ({ setFilter, filterState }: any) => {
  return (
    <div className={styles.filter}>
      <div className={styles.selectWrapper}>
        <span>Filter by: </span>
        <Select
          styles={customStyles}
          isSearchable={false}
          defaultValue={filter[0]}
          menuPosition="fixed"
          options={filter}
          className={styles.select}
          onChange={(event) =>
            setFilter({
              ...filterState,
              filter: event?.value,
            })
          }
        />
      </div>
      <div className={styles.selectWrapper}>
        <span>Color: </span>
        <Select
          isSearchable={false}
          styles={customStyles}
          defaultValue={colors[0]}
          menuPosition="fixed"
          options={colors}
          className={styles.select}
          onChange={(event) =>
            setFilter({
              ...filterState,
              colors: event?.value,
            })
          }
        />
      </div>

      <div className={styles.selectWrapper}>
        <span>Size: </span>
        <Select
          styles={customStyles}
          isSearchable={false}
          defaultValue={size[0]}
          menuPosition="fixed"
          options={size}
          className={styles.select}
          onChange={(event) =>
            setFilter({
              ...filterState,
              size: event?.value,
            })
          }
        />
      </div>
    </div>
  );
};
