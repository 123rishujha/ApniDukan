import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import styles from "./product.module.css";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getProducts } from "../redux/ProductReducer/action";
import Loader from "./Loader";
import Pagination from "./Pagination";

const ProductList = () => {
  const { isLoading, products, isError } = useSelector((store) => {
    return {
      isLoading: store.ProductReducer.isLoading,
      products: store.ProductReducer.products,
      isError: store.ProductReducer.isError,
    };
  });
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = products.slice(firstPostIndex, lastPostIndex);

  let obj = {
    params: {
      rating: searchParams.getAll("rating"),
      _sort: searchParams.get("order") && "price",
      _order: searchParams.get("order"),
    },
  };

  function handlePageChange(action) {
    if (action === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (
      action === "next" &&
      currentPage < Math.ceil(products.length / postPerPage)
    ) {
      setCurrentPage(currentPage + 1);
    }
  }

  useEffect(() => {
    dispatch(getProducts);
  }, [location.search]);

  return (
    <>
      <div id={styles.productlist}>
        {products.length > 0 &&
          currentPost.map((el) => {
            return (
              <Link to={`${el._id}`} key={el._id}>
                <ProductCard
                  image={el.imageUrls[0]}
                  price={Math.ceil(el.price - el.price * (el.discount / 100))}
                  old_price={el.price}
                  discount={`${el.discount}%`}
                  title={el.title.slice(0, 100)}
                  rating={
                    el.rating.rating <= 1 ? (
                      <label style={{ color: "#ffc315", fontSize: "25px" }}>
                        {"\u2605 \u2606 \u2606 \u2606 \u2606"}
                      </label>
                    ) : el.rating.rating > 1 && el.rating[0] <= 2 ? (
                      <label style={{ color: "#ffc315", fontSize: "25px" }}>
                        {"\u2605 \u2605 \u2606 \u2606 \u2606"}
                      </label>
                    ) : el.rating.rating > 2 && el.rating.rating <= 3 ? (
                      <label style={{ color: "#ffc315", fontSize: "25px" }}>
                        {"\u2605 \u2605 \u2605 \u2606 \u2606"}
                      </label>
                    ) : el.rating.rating > 3 && el.rating.rating <= 4 ? (
                      <label style={{ color: "#ffc315", fontSize: "25px" }}>
                        {"\u2605 \u2605 \u2605 \u2605 \u2606"}
                      </label>
                    ) : el.rating.rating > 4 && el.rating.rating <= 5 ? (
                      <label style={{ color: "#ffc315", fontSize: "25px" }}>
                        {"\u2605 \u2605 \u2605 \u2605 \u2605"}
                      </label>
                    ) : null
                  }
                  count={`(${el.rating.count})`}
                />
              </Link>
            );
          })}
      </div>
      <div>
        <Pagination
          totalPost={products.length}
          postPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};

export default ProductList;
