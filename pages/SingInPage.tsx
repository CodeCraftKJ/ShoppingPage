import type { NextPage } from "next";
import Footer from "../components/footer/footer";
import Hero from "../components/create-account/hero";
import NavigationBar from "../components/navigation-bar/navigation-bar";

const SignInPage: NextPage = () => {
  return (
    <div className="relative bg-white w-full flex flex-col items-center justify-start">
      <NavigationBar />
      <Hero />
      <Footer />
    </div>
  );
};

export default SignInPage;
