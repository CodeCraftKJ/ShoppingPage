import { NextPage } from "next";
import Footer from "../components/footer/footer";
import NavigationBar from "../components/navigation-bar/navigation-bar";

const FashionPage: NextPage = () => {
  return (
    <div className="relative bg-white w-full flex flex-col items-center justify-start">
      <NavigationBar />
      <div>Fashion Page</div>
      <Footer />
    </div>
  );
};

export default FashionPage;
