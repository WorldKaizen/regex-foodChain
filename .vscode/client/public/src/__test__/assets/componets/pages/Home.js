import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from '../components/Cart';
import './style.css';

const Home = () => {
  return (
    <div className="container-fluid background logo-span">
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;
