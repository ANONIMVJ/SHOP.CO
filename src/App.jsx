import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import ProductDetails from "./pages/ProductDetails";
import { ToastContainer } from "react-toastify";

import HomePage from "./pages/Home";
import CategoryDetails from "./pages/Category/";
import Products from "./pages/Products";
import NewProducts from "./pages/NewProducts";
import Allproducts from "./pages/AllProducts";
import CartPage from "./pages/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/category/:categoryId" element={<CategoryDetails />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="products" element={<Products />} />
          <Route path="allproducts" element={<Allproducts />} />
          <Route path="newproducts" element={<NewProducts />} />
          <Route path='/cart' element={<CartPage/>} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
