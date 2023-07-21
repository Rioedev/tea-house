import Banner from "@/components/Banner";
import Blog from "@/components/Blog";
import Category from "@/components/Category";
import HomeWhy from "@/components/HomeWhy";
import Products from "@/components/Products";
import TimeOpen from "@/components/TimeOpen";
import LayoutClient from "@/components/layouts/layout-client/LayoutClient";

const HomePage = () => {
  return (
    <div>
      <LayoutClient>
        <Banner></Banner>
        <Category></Category>
        <HomeWhy></HomeWhy>
        <Products></Products>
        <TimeOpen></TimeOpen>
        <Blog></Blog>
      </LayoutClient>
    </div>
  );
};

export default HomePage;
