import React, { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  Box,
  Flex,
  Image,
  Select,
  Button,
  Text,
  Heading
} from "@chakra-ui/react";

import { getProducts } from "../../redux/ProductReducer/action";
import { postCartSuccess } from '../../redux/cart/cart.actions';
import { useParams,createSearchParams, useNavigate } from "react-router-dom";
import Styles from "./ProductDetails.module.css";


const ProductDetails = () => {
  const { id } = useParams();
  const [qtn,setQtn] = React.useState(1);
  // console.log(id);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((store) => store.ProductReducer.products);
  console.log("products",products);
  const data = products?.find((elem) => elem._id == id);
//   console.log("data",data);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);


  const handleAddToCart = () =>{
    const {title,brand,description,price,discount,inStock,soldBy,imageUrls,rating,features,offers,category,subCategory,_id} = data;
    const payload = {
        _id,title,brand,
        description,price:calculatePrice(price,discount)*qtn,discount,
        inStock,soldBy,imageUrls,rating,features,offers,category,
        subCategory,
        qtn
    }
    console.log("payload",payload)
    alert("Item added to cart");
    dispatch(postCartSuccess(payload))
  }


  const handleBuyNow = () =>{
        let query = {};
        query._id = id;
        navigate({
          pathname:"/checkout",
          search: `?${createSearchParams(query)}`
        });
  }

  const calculatePrice = (price, discount) => {
    let off = Math.round((price * discount) / 100);
    let x = price - off;
    return x;
  };


  return (
    <Box className={Styles.detailsBox} marginTop='70px'>
      {data && (
        <Flex
          className={Styles.detailsContainer}
          flexDir={{ base: "column", md: "row" }}
        >
          <Image
            className={Styles.productImage}
            src={data.imageUrls[0]}
            alt="details"
          />
          <Box className={Styles.textBox}>
            <Text textAlign="left" as="h1">
              {data.description}
              <hr />
            </Text>
            <Box className={Styles.textDetails}>
              <Text textAlign="left">
                <span style={{ color: "green" }}>Brand:- </span>
                {data.brand}
              </Text>
              <Text textAlign="left" style={{textDecoration:'line-through'}}>
                <span style={{ color: "red", }}>Price:- </span>
                ₹{data.price}
              </Text>
              <Text textAlign="left">
                <span style={{ color: "green" }}>Discount:- </span>
                {data.discount}% off
              </Text>
              <Text textAlign="left">
                <span style={{ color: "green"}}>Deal Price:- </span>
                ₹{calculatePrice(data.price,data.discount)}
              </Text>

              <Text textAlign="left">
                <span style={{ color: "green" }}>Return policy: </span>
                Eligible for Return, Refund or Replacement within 30 days of
                receipt
              </Text>
              <Text textAlign="left">
                <span style={{ color: "green" }}>Support: </span>
                Free Amazon tech support included
              </Text>
            </Box>
          </Box>
          <Flex className={Styles.payment}>
            <Heading>₹{calculatePrice(data.price,data.discount)}</Heading> {/* calculate here ---------- */}
            <Text>shipping and imports are free</Text>
            <Text color="red">Only 1 left in stock (more on the way)</Text>
            <Text>₹{calculatePrice(data.price,data.discount)}</Text>
            <Button
              onClick={handleAddToCart}
              className={Styles.pay_btn}
              colorScheme="orange"
            >
              Add to Cart
            </Button>
            <Button
              onClick={handleBuyNow}
              className={Styles.pay_btn}
              colorScheme="orange"
            >
              Buy Now
            </Button>
          </Flex>
        </Flex>
      )}
    </Box>
  );
};

export default ProductDetails;
