import React, { useEffect, useState } from "react";
import {
  Box,
  Input,
  VStack,
  Button,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
//files
import logo from "../../assets/logo.png";

// redux functions
import { useSelector, useDispatch } from "react-redux";
import {  loginSuccessAdmin } from "../../redux/auth/auth.actions";

const AdminLogin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const token = useSelector((store) => store.authReducer.token);
  const isError = useSelector((store) => store.authReducer.isError);
  const isLoading = useSelector((store) => store.authReducer.isLoading);
  const dispatch = useDispatch();

  console.log(location);

  useEffect(()=>{
    if(location.pathname!='/adminLogin' && location.pathname!=""){
      localStorage.setItem("location",location.pathname);
    }
  },[location]);


  const handleSubmit = () => {
    if (email.length === 0 || password.length === 0) {
      alert("please fill all the fields");
    } else {
      const payload = { email, password };
      console.log("login", payload);
      try{
        dispatch(loginSuccessAdmin(payload));
        console.log(location);
        console.log(token);
        navigate(localStorage.getItem("location") || "");
      }
      catch(err){
        alert("you got some error");
        console.log(err);
      }
    }

    // const payload = { email, password };
    // console.log(payload);
    // axios
    //   .post("http://localhost:8080/user/login", payload)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));

  };

  useEffect(()=>{
    if(isError){
      alert("you got error please refresh and try again");
    }
  },[isError]);
  
  useEffect(()=>{
    console.log(token);
    if(token){
        return navigate("/admin");
    }
  },[token]);

  if(isLoading){
    return <h1>Loading...</h1>
  }

  return (
    <div style={{marginTop: "20px", marginBottom: "20px"}}>
        <div>Signup as an Admin? <button style={{color: "blue"}} onClick={() => navigate("/adminSignup")}>Click here!</button></div>
      

        <Box width="90%" height="90%" boxSizing="border-box" margin="auto">
      
      <VStack
        maxWidth="300px"
        minWidth="250px"
        // border="1px solid red"
        margin="auto"
        marginTop='20px'
      >
        <Image
          margin="auto"
          marginTop="30px"
          cursor="pointer"
          onClick={() => navigate("/", { replace: true })}
          src={logo}
          width="150px"
          alt="Logo"
        />
        <div style={{textAlign: "center"}}>Create New Admin Account? <button style={{color: "blue"}} onClick={() => navigate("/adminSignup")}>Click Here!</button></div>
        <Box
          width="100%"
          margin="auto"
          marginTop="10px"
          padding="20px"
          boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"
        >
          <Heading fontSize={"40px"} textAlign={"center"}>Admin Login</Heading>
          <VStack padding="10px" width="100%">
            <Input
              type="email"
              required
              placeholder="email"
              focusBorderColor="orange.400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              required
              placeholder="password"
              focusBorderColor="orange.400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              onClick={handleSubmit}
              width="100%"
              bg="orange.400"
              fontWeight="200"
              _hover={{ bg: "orange.400" }}
            >
              Sign In
            </Button>
            <Text>
              By continuing, you agree to Apni Dukan's{" "}
              <Link style={{ color: "blue" }}>Conditions of Use</Link> and{" "}
              <Link style={{ color: "blue" }}>Privacy Notice</Link>.
            </Text>
          </VStack>
        </Box>

        <Text margin="auto" textAlign={"center"}>
          New to Amazon?
        </Text>
        <hr width="250px" margin="auto" />
        <Button
          width="250px"
          margin="auto"
          fontWeight="200"
          onClick={() => navigate("/signup")}
        >
          create your user account
        </Button>
      </VStack>
    </Box>
    </div>
  )
}

export default AdminLogin
