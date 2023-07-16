import { NextPage } from "next";
import Footer from "../components/footer/footer";
import NavigationBar from "../components/navigation-bar/navigation-bar";

const LifestylePage: NextPage = () => {
  return (
    <div className="relative bg-white w-full flex flex-col items-center justify-start">
      <NavigationBar />
      <div>Lifestyle Page</div>
      <Footer />
    </div>
  );
};

export default LifestylePage;
