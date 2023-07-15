import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import NavigationBar from "../components/navigation-bar";
import Hero from "../components/hero";
import BrandsIcon from "../components/brands-icon";
import NewArrivalsSection from "../components/new-arrivals-section";
import Favourites from "../components/favourites";
import AppDownload from "../components/app-download";
import Community from "../components/community";
import Footer from "../Footer";

const ShoppingLandingPageFinal: NextPage = () => {
  const router = useRouter();

  const onFashionLogoClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onCATALOGUEClick = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  const onFASHION1Click = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  const onFAVOURITEClick = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  const onLIFESTYLEClick = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  const onSignUpClick = useCallback(() => {
    router.push("/page2");
  }, [router]);

  const onExploreNowClick = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  const onArrowIconClick = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  const onExploreNow1Click = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  const onArrowIcon1Click = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  const onExploreNow2Click = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  const onArrowIcon2Click = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  const onExploreNow3Click = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  const onArrowIcon3Click = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  const onExploreNow4Click = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  const onArrowIcon4Click = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

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
