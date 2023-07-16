import { NextPage } from "next";
import Footer from "../components/footer/footer";
import NavigationBar from "../components/navigation-bar/navigation-bar";

const FavouritePage: NextPage = () => {
  return (
    <div className="relative bg-white w-full flex flex-col items-center justify-start">
      <NavigationBar />
      <div>Favourite Page</div>
      <Footer />
    </div>
  );
};

export default FavouritePage;
