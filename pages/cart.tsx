import React from "react";
import { ReceiptList } from "../components/receipt/ReceiptList";
import { Header } from "../components/shop/Header";

const cart = () => {
  return (
    <>
      <Header shop={true} />
      <ReceiptList />
    </>
  );
};

export default cart;
