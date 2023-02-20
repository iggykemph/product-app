import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import Categories from "./components/Categories";
import ProductDetails from "./components/ProductDetails";
import CategoriesDetails from "./components/CategoriesDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductList />}></Route>
        <Route path="/products/:id" element={<ProductDetails />}></Route>
        <Route path="/category" element={<Categories />}></Route>
        <Route
          path="/products/category/category"
          element={<CategoriesDetails />}
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
