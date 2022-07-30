import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { About } from "../components/About";
import { Header } from "../components/Header";
import { ShopSection } from "../components/ShopSection";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <About />
      <ShopSection />
    </>
  );
};

export default Home;
