import { Route, Routes } from "react-router-dom";
import "swiper/css";
import LayoutClient from "./components/layouts/layout-client/LayoutClient";
import HomePage from "./pages/client/HomePage";
import ProductDetail from "./pages/client/productDetail";
import LoginPage from "./pages/client/LoginPage";
import RegisterPage from "./pages/client/RegisterPage";
import CartPage from "./pages/client/CartPage";
import ProductList from "./pages/client/ProductList";
import Menus from "./pages/client/Menus";
import LayoutAdmin from "./components/layouts/layout-admin/LayoutAdmin";
import ListProduct from "./pages/admin/product/ListProduct";
import AddProduct from "./pages/admin/product/AddProduct";
import UpdateProduct from "./pages/admin/product/UpdateProduct";
import ListCategory from "./pages/admin/category/ListCategory";
import AddCategory from "./pages/admin/category/AddCategory";
import UpdateCategory from "./pages/admin/category/UpdateCategory";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutClient />}>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route index element={<HomePage />}></Route>
          <Route path="/productDetail" element={<ProductDetail />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/product-all" element={<ProductList />}></Route>
          <Route path="/menus" element={<Menus />}></Route>
        </Route>
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route path="product" element={<ListProduct />}></Route>
          <Route path="add-product" element={<AddProduct />}></Route>
          <Route path="update-product/:id" element={<UpdateProduct />}></Route>
          <Route path="category" element={<ListCategory />}></Route>
          <Route path="add-category" element={<AddCategory />}></Route>
          <Route path="update-category" element={<UpdateCategory />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
