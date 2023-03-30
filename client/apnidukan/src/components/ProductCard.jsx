import React from "react";
import styles from "./product.module.css";

const ProductCard = ({ image, title, old_price, discount, rating,count,price }) => {
  
  
  
  
  return (
    <div className={styles.productCard}>
      <img className={styles.card_img} src={image} alt={title} />
      <p className={styles.title}>{title}</p>
      <div className={styles.priceclass}>
        <p className={styles.old_price}>Rs.{old_price}</p>
        <p className={styles.price}>{price}</p>
        <p>{discount}  </p>
      </div>
      <p className={styles.rating}> {rating}{(count)}</p>
    </div>
  );
};

export default ProductCard;
