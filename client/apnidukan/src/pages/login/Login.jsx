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

import { Link, useLocation, useNavigate, Navigate } from "react-router-dom";
import axios from "axios";
//files
import logo from "../../assets/logo.png";

// redux functions
import { useSelector, useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/auth/auth.actions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const token = useSelector((store) => store.authReducer.token);
  const isError = useSelector((store) => store.authReducer.isError);
  const isLoading = useSelector((store) => store.authReducer.isLoading);
  const isLoggedIn = useSelector((store) => store.authReducer.isLoggedIn);
  const dispatch = useDispatch();
  const location = useLocation();
  const commingFrom = location?.state?.data || "/";
  console.log(commingFrom);
  console.log("login token from login ", token);

  // console.log(location);

  const handleSubmit = () => {
    if (email.length === 0 || password.length === 0) {
      alert("please fill all the fields");
    } else {
      const payload = { email, password };
      try {
        dispatch(loginSuccess(payload));
        // console.log(isLoggedIn, "from login");
        // navigate(commingFrom, { replace: true });
      } catch (err) {
        // alert("you got erro");
        console.log(err);
      }
    }
  };

  useEffect(() => {
    if (isError) {
      alert("sothing went wrong");
    }
    if (isLoggedIn) {
      navigate(commingFrom);
    }
  }, [isError, token, isLoggedIn]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (token) {
    return <Navigate to={commingFrom} />;
  }

  return (
    <Box width="90%" height="90%" boxSizing="border-box" margin="auto">
      <VStack
        maxWidth="300px"
        minWidth="250px"
        // border="1px solid red"
        margin="auto"
        marginTop="20px"
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
        <div>
          Admin ?{" "}
          <button
            style={{ color: "blue" }}
            onClick={() => navigate("/adminLogin")}
          >
            Click Here!
          </button>
        </div>
        <Box
          width="100%"
          margin="auto"
          marginTop="10px"
          padding="20px"
          boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"
        >
          <Heading margin="auto">Sign in</Heading>
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
              By continuing, you agree to Amazon's{" "}
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
          create your amazon account
        </Button>
      </VStack>
    </Box>
  );
};

export default Login;
