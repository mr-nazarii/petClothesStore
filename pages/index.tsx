import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { About } from "../components/sections/About";
import { Footer } from "../components/sections/Footer";
import { Header } from "../components/sections/Header";
import { ShopSection } from "../components/sections/ShopSection";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <About />
      <ShopSection />
      <Footer />
    </>
  );
};

export default Home;
