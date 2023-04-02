import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  VStack,
  HStack,
  Input,
  Button,
  Text,
  Badge
} from "@chakra-ui/react";


import { useSearchParams,useNavigate } from "react-router-dom";

//redux function
import { getCheckoutSuccess } from "../../redux/checkout/checkout.actions";
import { postOrderSuccess } from '../../redux/order/order.actions';
import { useSelector, useDispatch } from "react-redux";

const CheckOut = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");
  const [filled, setFilled] = useState(false);
  const [total, setTotal] = useState(0);
  const [searchParams,setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const checkout = useSelector((store) => store.checkoutReducer.checkout);
  const dispatch = useDispatch();

  const handleAddress = () => {
    if (
      name.length > 0 &&
      contact.length > 0 &&
      pincode.length > 0 &&
      address.length > 0
    ) {
      setFilled(!filled);
    } else {
      alert("please fill all the fields");
    }
  };

  useEffect(() => {
    // const searchParams = useSearchParams.getAll("_id");
    console.log(searchParams.getAll("_id"));
    dispatch(getCheckoutSuccess(searchParams));
  }, []);

//this function will calculate the price by calculationg price and discount
  const calculateDetail = (price, discount) => {
    let off = Math.round((price * discount) / 100);
    // return off;
    // console.log(off);
    let x = price - off;
    return x;
  };

// this function will return the sum of all the prices;
  const findTotal = () => {
    let sum = 0;
    for (let elem of checkout) {
      console.log(elem.price, elem.discount, elem.qtn);
      sum +=
        calculateDetail(Number(elem.price), Number(elem.discount)) *
        Number(elem.qtn);
    }
    return sum;
  };
  
  // this useEffect will set the total price of all the products
  useEffect(() => {
    let x = findTotal();
    setTotal(x);
  }, [checkout]);

  
  const handleOrderSubmit = () =>{
    //dispatch the order redux function
    const payload = checkout.map((elem)=>{
      const obj = {
        title: elem.title,
        brand: elem.brand,
        description: elem.description,
        DealPrice:calculateDetail(elem.price,elem.discount),
        discount: elem.discount,
        inStock: elem.inStock,
        soldBy: elem.soldBy,
        imageUrls: elem.imageUrls,
        rating: elem.rating,
        features: elem.features,
        offers: elem.offers,
        category: elem.category,
        subCategory: elem.subCategory,
        productId: elem.productId,
        qtn: elem.qtn,
        userId: elem.userId,
        userDetails: {name,contact,pincode,address}
      }
      return obj
    })
    console.log(payload);
    dispatch(postOrderSuccess(payload));
    alert("order successful");
    // navigate("/");
  }

  return (
    <Box marginTop="80px" padding='30px'>
      <Flex justifyContent="space-around" flexDir={{base:'column',md:"row"}}>
        <Box borderRadius='20px'>
          <Heading>Select a delivery address</Heading>
          {!filled ? (
            <VStack>
              <Input
                type="text"
                value={name}
                placeholder="full name"
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type="number"
                value={contact}
                placeholder="contact no"
                onChange={(e) => setContact(e.target.value)}
              />
              <Input
                type="address"
                value={address}
                placeholder="address"
                onChange={(e) => setAddress(e.target.value)}
              />
              <Input
                type="number"
                value={pincode}
                placeholder="pincode"
                onChange={(e) => setPincode(e.target.value)}
              />
            </VStack>
          ) : null}

          {filled && (
            <VStack
              fontSize="20px"
              flexWrap="wrap"
              borderRadius='20px'
              bg="orange.200"
              padding="30px"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Text>Name: {name}</Text>
              <Text> Address: {address}</Text>
              <Text>Pincode: {pincode}</Text>
              <Text>contact no: {contact}</Text>
            </VStack>
          )}
          <Button width='100%' onClick={handleAddress} bg="yellow" fontWeight='200' >
            {filled ? "Edit addredd" : "use this address"}
          </Button>
        </Box>
        <Box display='flex' flexDir='column' gap='10px'>
          <VStack alignItems='flex-start'>
            <Heading>Summary</Heading>
            <Text>Items: {checkout.length}</Text>
          </VStack>
          <HStack gap="10px">
            <Text>Order Total</Text>
            <Text>₹{total}</Text>
          </HStack>
          <Badge p='10px'>Cash on Delivery</Badge>
          <Button isDisabled={!filled} onClick={handleOrderSubmit} bg='yellow' fontWeight='200'>process to buy</Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default CheckOut;

