import React from "react";
import ProductList from "../components/ProductList";
import styles from "./products.module.css";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";


const Product = () => {
  return (
  <>
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>

      <section className={styles.products}>
        <div className="main-product">
          <ProductList />
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};



export default Product;
