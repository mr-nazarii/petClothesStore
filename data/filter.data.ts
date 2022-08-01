export const filter = [
  { value: "sale", label: "Sale" },
  { value: "high", label: "to High price" },
  { value: "low", label: "to Low price" },
];

export const colors = [
  { value: "red", label: "Red" },
  { value: "green", label: "Green" },
  { value: "Yellow", label: "Yellow" },
];

export const size = [
  { value: "xs", label: "XS" },
  { value: "s", label: "S" },
  { value: "m", label: "M" },
  { value: "l", label: "L" },
  { value: "xl", label: "XL" },
];

export const customStyles = {
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
