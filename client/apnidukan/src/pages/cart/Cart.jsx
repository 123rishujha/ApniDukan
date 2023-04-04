import { useState, useEffect } from "react";
import {
  Box,
  Stack,
  HStack,
  VStack,
  Flex,
  Image,
  Text,
  Select,
  CheckboxGroup,
  Checkbox,
  Heading,
  Badge,
  Button,
} from "@chakra-ui/react";

import Styles from "./Cart.module.css";
import { useNavigate } from 'react-router-dom';
import { useSearchParams,createSearchParams } from "react-router-dom";

//redux funtions
import { getCartSuccess,updateCartSuccess,deleteCartSuccess } from "../../redux/cart/cart.actions";
// import { updateCartSuccess } from '../../redux/cart/cart.actions';
// import { deleteCartSuccess } from '../..redux/cart/'

import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const cartData = useSelector((store) => store.cartReducer.cart);
  console.log(cartData);
  const dispatch = useDispatch();
  const [order, setOrder] = useState([]); //selected products(_id);
  const [total, setTotal] = useState(0); //total amount
  const [count,setCount] = useState(0); // total how many items going to be delivered
  // const [deliver, setDeliver] = useState([]); //product going for delivery

  const navigate = useNavigate();
  const [searchParams,setSearchParams] = useSearchParams();

 

  const findTotal = () => {
    let sum = 0;
    let totalProduct = 0;
    for (let elem of cartData) {
      if (order.includes(elem._id)) {
        // setDeliver((prev) => [...prev, elem]);
        console.log(elem.price,elem.discount,elem.qtn);
        sum += calculateDetail(Number(elem.price), Number(elem.discount)) * Number(elem.qtn);
        totalProduct += elem.qtn;
      }
    }
    setCount(totalProduct);
    return sum;
  };

  useEffect(() => {
    dispatch(getCartSuccess());
  }, []);

  //setTotal 
  useEffect(() => {
    let x = findTotal();
    console.log("x",x);
    setTotal(x);
  }, [order,cartData]);

 
  // the will calculate the deal price
  const calculateDetail = (price, discount) => {
    let off = Math.round((price * discount) / 100);
    // return off;
    // console.log(off);
    let x = price - off;
    return x;
  };

  const handleSelected = (value) => {
    setOrder(value);
  };
  // console.log(order);
  //will update the quantity
  const handleQuantity = (quantity,id) =>{
      console.log(quantity,id);
      const payload = {qtn: Number(quantity)}
      dispatch(updateCartSuccess(id,payload));
  }

  const handleDelete = (id) =>{
    console.log(id);
    console.log("delete called");
    dispatch(deleteCartSuccess(id));
  }

  //move to checkout page;
  const handleCheckOut = () =>{
    const params = {};
    // console.log(order);
    let query = {};
    if(order.length>0){
      params._id = order;
      query._id = order
    }
    navigate({
      pathname:"/checkout",
      search: `?${createSearchParams(query)}`
    });
    // setSearchParams(params);
  }  


  return (
    <Box className={Styles.mainBox}>
      <Stack
        width="95%"
        margin="auto"
        className={Styles.mainStack}
        flexDirection={{ base: "column-reverse", md: "row" }}
      >
        <VStack className={Styles.leftProducts}>
          <Heading>Shopping Cart</Heading>
          <CheckboxGroup
            colorScheme="green"
            // defaultValue={[...cartData]}
            value={order}
            onChange={handleSelected}
          >
            {cartData?.map((elem) => {
              return (
                <Stack className={Styles.singleCard} key={elem._id}>
                  <HStack className={Styles.imageAndCheckbox}>
                    <Checkbox value={elem._id}> </Checkbox>
                    <Stack className={Styles.imageHolder}>
                      <Image
                        src={elem.imageUrls[0]}
                        className={Styles.cardImag}
                      />
                      <Box
                        display={{ base: "flex", md: "none" }}
                        flexDirection="column-reverse"
                        gap="3px"
                      >
                        <Box
                          background="#eaeded"
                          borderRadius="5px"
                          padding="2px"
                          fontWeight="200"
                          display='flex'
                          justifyContent='center'
                          alignItems="center"
                          maxWidth='100px'
                        >
                          Qty: 
                          <select
                            padding='10px'
                            size='sm'
                            width='50%'
                            placeholder={`${elem.qtn}`}
                            value={elem.qtn}
                            onChange={(e)=>handleQuantity(e.target.value,elem._id)}
                            className={Styles.optionsBoxChild}
                          >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                          </select>
                        </Box>
                        <Button onClick={()=>handleDelete(elem._id)} size="sm" variant="outline" colorScheme="red">
                          Delete
                        </Button>
                      </Box>
                    </Stack>
                  </HStack>
                  <VStack className={Styles.CardDetails} >
                    <Text>{elem.title}</Text>
                    <Badge
                      colorScheme={elem.inStock ? "green" : "red"}
                      borderRadius="5px"
                    >
                      {elem.inStock ? "inStock" : "out of Stock"}
                    </Badge>
                    <Text color={"green"}>
                      ₹{calculateDetail(elem.price, elem.discount)}
                    </Text>

                    <HStack display={{ base: "none", md: "flex" }}>
                        <Box
                          background="#eaeded"
                          borderRadius="5px"
                          padding="2px"
                          fontWeight="200"
                          display='flex'
                          justifyContent='center'
                          alignItems="center"
                          maxWidth='100px'
                        >
                          Qty: 
                          <select
                            padding='10px'
                            size='sm'
                            width='50%'
                            placeholder={`${elem.qtn}`}
                            value={elem.qtn}
                            onChange={(e)=>handleQuantity(e.target.value,elem._id)}
                            className={Styles.optionsBoxChild}
                          >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                          </select>
                        </Box>
                      <Button onClick={()=>handleDelete(elem._id)} size="sm" variant="outline" colorScheme="red">
                        Delete
                      </Button>
                    </HStack>
                  </VStack>
                </Stack>
              );
            })}
          </CheckboxGroup>
        </VStack>
        {/* checkOUt */}
        <VStack className={Styles.checkOUt} >
          {order.length > 0 ? (
            <Flex flexWrap='wrap' alignItems='center' gap='10px' >
              <Text fontSize="12px" color="teal">
                Your order is eligible for Delivery.
              </Text>
              <Text>
                SubTotal: ({count}items): ₹{total}
              </Text>
            </Flex>
          ) : (
            <Text>No Item selected</Text>
            )}
            <Button onClick={handleCheckOut} width='100%' background="yellow" isDisabled={order.length <=0}>checkout</Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Cart;
