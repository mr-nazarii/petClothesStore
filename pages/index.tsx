import type { NextPage } from "next";
import { About } from "../components/home/About";
import { Footer } from "../components/home/Footer";
import { Header } from "../components/home/Header";
import { ShopSection } from "../components/home/ShopSection";

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
