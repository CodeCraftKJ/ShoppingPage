import type { NextPage } from "next";
import NavigationBar from "../components/navigation-bar/navigation-bar";
import Hero from "../components/hero/hero";
import BrandsIcon from "../components/brands/brands-icon";
import NewArrivalsSection from "../components/new-arrivals/new-arrivals-section";
import Favourites from "../components/favourites/favourites";
import AppDownload from "../components/appdownload/app-download";
import Community from "../components/community/community";
import Footer from "../components/footer/footer";

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
