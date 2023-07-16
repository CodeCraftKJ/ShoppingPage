import type { NextPage } from "next";
import NavigationBar from "../components/navigation-bar";
import Hero from "../components/hero";
import BrandsIcon from "../components/brands-icon";
import NewArrivalsSection from "../components/new-arrivals-section";
import Favourites from "../components/favourites";
import AppDownload from "../components/app-download";
import Community from "../components/community";
import Footer from "../components/footer";

const ShoppingLandingPageFinal: NextPage = () => {
  return (
    <div className="relative bg-white w-full flex flex-col items-center justify-start">
      <NavigationBar />
      <Hero />
      <BrandsIcon />
      <NewArrivalsSection />
      <Favourites />
      <AppDownload />
      <Community />
      <Footer />
    </div>
  );
};

export default ShoppingLandingPageFinal;
