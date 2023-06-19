import dynamic from "next/dynamic";
import Seo from "../components/Seo";
import HomeIndex from "../components/pages/home";

const index = () => {
  return (
    <>
      <Seo pageTitle="Home" />
      <HomeIndex />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
