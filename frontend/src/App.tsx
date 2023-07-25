import { Route, Routes } from "react-router-dom";
import "swiper/css";
import LayoutClient from "./components/layouts/layout-client/LayoutClient";
import HomePage from "./pages/client/HomePage";
import ProductDetail from "./pages/client/productDetail";
import LayoutAdmin from "./components/layouts/layout-admin/LayoutAdmin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutClient />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/productDetail" element={<ProductDetail />}></Route>
        </Route>
        <Route path="/admin" element={<LayoutAdmin />}></Route>
      </Routes >
    </>
  );
}

export default App;
