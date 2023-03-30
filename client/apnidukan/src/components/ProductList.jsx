import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';

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
  return (
    <div>ProductList</div>
  )
}

export default ProductList