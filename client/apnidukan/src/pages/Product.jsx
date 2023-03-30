import React from "react";
import styles from "./product.module.css"
import ProductList from "../components/ProductList";
import Sidebar from "../components/Sidebar";

const Product = () => {
  return (
    <div>
      <section>
        <main className={styles.main} >
          <Sidebar />
          <ProductList />
        </main>
      </section>
    </div>
  );
};

export default Product;


