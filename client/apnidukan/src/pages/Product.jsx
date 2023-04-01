import React from "react";
import ProductList from "../components/ProductList";
import styles from "./products.module.css";
import Sidebar from "../components/Sidebar";
import Sort from "../components/Sort";


const Product = () => {
  return (
  
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>

      <section className={styles.products}>
        <div className="sort-filter">
          <Sort />
        </div>
        <div className="main-product">
          <ProductList />
        </div>
      </section>
    </div>
  );
};



export default Product;
