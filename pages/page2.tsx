import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import NavigationBar from "../components/navigation-bar";
import CreateAccount from "../components/create-account";
import FashionContainer from "../components/fashion-container";

const Page2: NextPage = () => {
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

  const onAboutClick = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  const onContactUsClick = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  const onSupportClick = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  const onCareersClick = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  const onShareLocationClick = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  const onOrdersTrackingClick = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  const onSizeGuideClick = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  const onFAQsClick = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  const onTermsConditionsClick = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  const onPrivacyPolicyClick = useCallback(() => {
    window.open("https://www.example.com/");
  }, []);

  return (
    <div className="relative bg-white w-full flex flex-col items-center justify-start">
      <NavigationBar />
      <CreateAccount />
      <FashionContainer />
    </div>
  );
};

export default Page2;
