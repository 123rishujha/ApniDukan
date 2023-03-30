import React, { useState } from "react";
import {
  Box,
  Input,
  VStack,
  Button,
  Heading,
  Image,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/react";

import { Link, useNavigate } from "react-router-dom";
// redux functions
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../../redux/auth/auth.actions";

//importing files
import Styles from "./SignUp.module.css";
import logo from "../../assets/logo.png";

const SignUp = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const token = useSelector((store) => store.authReducer.token);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("called");
   
    const payload = { username:name, number:mobile, email, password };
    console.log("payload from signup page",payload);
    try{
        dispatch(registerUser(payload));
        alert("successfull, please go to login now");
        // navigate("/");
    }
    catch(err){
        console.log(err);
        alert("you get an error");
    }
  };
  
  return (
    <>
      <Image
        margin="auto"
        cursor="pointer"
        onClick={() => navigate("/", { replace: true })}
        src={logo}
        width="150px"
        alt="Logo"
      />
      <Box className={Styles.container}>
        <VStack className={Styles.stackContainer}>
          <Heading fontWeight="500" width="100%">
            Create account
          </Heading>
          <form className={Styles.form} onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel className={Styles.label}>Your name</FormLabel>
              <Input
                type="text"
                required
                placeholder="first and last name"
                focusBorderColor="orange.400"
                className={Styles.input}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <FormLabel className={Styles.label}>Mobile number</FormLabel>
              <Input
                type="number"
                required
                focusBorderColor="orange.400"
                className={Styles.input}
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
              <FormLabel className={Styles.label}>Email number</FormLabel>
              <Input
                type="email"
                required
                focusBorderColor="orange.400"
                className={Styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormLabel className={Styles.label}>Password</FormLabel>
              <Input
                type="password"
                required
                focusBorderColor="orange.400"
                className={Styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormHelperText marginBottom="5px" fontSize="12px">
                Passwords must be at least 6 characters.
              </FormHelperText>
              <FormLabel marginTop="5px" className={Styles.label}>
                Re-enter Password
              </FormLabel>
              <Input
                type="password"
                required
                focusBorderColor="orange.400"
                className={Styles.input}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </FormControl>
            <Button
              type="submit"
              bg="orange"
              width="100%"
              marginTop="20px"
              _hover={{ bg: "orange" }}
              className={Styles.button}
            >
              continue
            </Button>
          </form>
        </VStack>
        <Text className={Styles.termsText}>
          By creating an account, you agree to Amazon's{" "}
          <Link style={{ color: "blue" }}>Conditions of Use</Link> and
          <Link style={{ color: "blue" }}> Privacy Notice.</Link>
        </Text>
        <hr />
        <Text className={Styles.termsText}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "blue" }}>
            Sign in
          </Link>
        </Text>
      </Box>
    </>
  );
};

export default SignUp;
