import Footer from "@/components/Footer";
import Header from "@/components/Header";

const LayoutClient = ({ children }) => {
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
};

export default LayoutClient;
