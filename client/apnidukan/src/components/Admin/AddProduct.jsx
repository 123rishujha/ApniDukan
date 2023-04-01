import React, { useState } from "react";
import "./Admin_Navbar.css";
import {
  ChakraProvider,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import AdminNavbar from "./AdminNavbar";

const AddProducts = () => {
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [strikePrice, setStrikePrice] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();

    let formData = {
      category,
      subCategory,
      title,
      image,
      brand,
      price: +price,
      description,
    };

    console.log(formData);
    postData(formData);

    setCategory("");
    setSubCategory("");
    setTitle("");
    setImage("");
    setBrand("");
    setStrikePrice("");
    setPrice("");
    setDescription("");
  };

  const postData = (data) => {
    axios.post("", data);
  };

  return (
    <div style={{ backgroundColor: "#cec6c6" }}>
      <ChakraProvider>
        <AdminNavbar />
        <div
          style={{
            backgroundColor: "white",
            border: "1px solid grey",
            borderRadius: "10px",
            width: "60%",
            margin: "auto",
            marginTop: "50px",
            padding: "60px 20px",
          }}>
          <h1
            style={{
              textAlign: "center",
              marginTop: "-30px",
              marginBottom: "20px",
              fontSize: "30px",
            }}>
            <b>
              <u>Add Product</u>
            </b>
          </h1>
          <form onSubmit={handleSubmitForm}>
            <FormControl isRequired>
              <div style={{ marginBottom: "20px" }}>
                <FormLabel>Select Category</FormLabel>
                <Select
                  value={category}
                  onChange={(e) => setCategory(e.currentTarget.value)}
                  placeholder="Select Category">
                  <option value="cloths">Cloths</option>
                  <option value="fitness">Fitness</option>
                  <option value="furniture">Furniture</option>
                  <option value="electronics">Electronics</option>
                  {/* <option value="grocery">Grocery</option> */}
                </Select>
              </div>

              <div style={{ marginBottom: "20px" }}>
                <FormLabel>Select sub-category</FormLabel>
                {category === "cloths" ? (
                  <Select
                    value={subCategory}
                    onChange={(e) => setSubCategory(e.currentTarget.value)}
                    placeholder="Select sub-category">
                    <option value="shirt">Shirts</option>
                    <option value="t-shirt">T-shirt</option>
                    <option value="hoodie">Hoodie</option>
                    <option value="pant">Pants</option>
                  </Select>
                ) : category === "fitness" ? (
                  <Select
                    value={subCategory}
                    onChange={(e) => setSubCategory(e.currentTarget.value)}
                    placeholder="Select sub-category">
                    <option value="shirt">fitttt</option>
                    <option value="t-shirt">fitttt</option>
                    <option value="hoodie">fittttrrr</option>
                    <option value="pant">fittttsss</option>
                    <option value="watch">fittttttt</option>
                    <option value="Wooden chair">fitttt Chair</option>
                    <option value="USB cable">USB fitttt</option>
                  </Select>
                ) : category === "furniture" ? (
                  <Select
                    value={subCategory}
                    onChange={(e) => setSubCategory(e.currentTarget.value)}
                    placeholder="Select sub-category">
                    <option value="shirt">Bed</option>
                    <option value="t-shirt">Sofa</option>
                    <option value="hoodie">Chair</option>
                    <option value="pant">Bookshelf</option>
                    <option value="watch">Dining table</option>
                  </Select>
                ) : category === "electronics" ? (
                  <Select
                    value={subCategory}
                    onChange={(e) => setSubCategory(e.currentTarget.value)}
                    placeholder="Select sub-category">
                    <option value="shirt">Ac</option>
                    <option value="t-shirt">smart TV</option>
                    <option value="hoodie">Radio</option>
                    <option value="pant">laptop</option>
                    <option value="watch">mobiles</option>
                    <option value="Wooden chair">tablets</option>
                  </Select>
                ) : (
                  <Select ><option value="">Please select Category</option></Select>
                )}
              </div>

              <div style={{ marginBottom: "20px" }}>
                <FormLabel>Title</FormLabel>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.currentTarget.value)}
                  placeholder="Product Title"
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <FormLabel>Image</FormLabel>
                <Input
                  value={image}
                  onChange={(e) => setImage(e.currentTarget.value)}
                  type="text"
                  placeholder="Image URL"
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <FormLabel>Brand</FormLabel>
                <Input
                  value={brand}
                  onChange={(e) => setBrand(e.currentTarget.value)}
                  type="text"
                  placeholder="Brand"
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <FormLabel>strike price</FormLabel>
                <Input
                  value={strikePrice}
                  onChange={(e) => setStrikePrice(e.currentTarget.value)}
                  type="number"
                  placeholder="strike price"
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <FormLabel>Price</FormLabel>
                <Input
                  value={price}
                  onChange={(e) => setPrice(e.currentTarget.value)}
                  type="number"
                  placeholder="Price"
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <FormLabel>Description</FormLabel>
                <Input
                  value={description}
                  onChange={(e) => setDescription(e.currentTarget.value)}
                  type="text"
                  placeholder="Description"
                />
              </div>
              <div style={{ textAlign: "center", marginTop: "40px" }}>
                <Button backgroundColor={"grey"} color={"black"} type="submit">
                  Add Product
                </Button>
              </div>
            </FormControl>
          </form>
        </div>
      </ChakraProvider>
    </div>
  );
};

export default AddProducts;
