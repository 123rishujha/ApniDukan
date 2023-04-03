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
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [image, setImage] = useState("");
  const [soldBy, setSoldBy] = useState("");
  const [inStock, setInStock] = useState(true);
  const [rating, setRatings] = useState({});
  const [features, setFeatures] = useState("");

  const [description, setDescription] = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();

    let formData = {
      category,
      subCategory,
      title,
      discount: +discount,
      imageUrls: image.split(" "),
      brand,
      price: +price,
      description,
      soldBy,
      inStock,
      rating: {
        rating: Math.floor(Math.random() * 5) + 1,
        count: Math.floor(Math.random() * 50) + 5,
      },
      features: features.split(" "),
      offers: [
        "EMI on debit cards is currently available for select customers of following banks:HDFC, ICICI, Axis, Kotak Mahindra and Federal Bank on products above Rs.5,000. To know more about Debit EMI eligibility and how it works",
        "10% Instant Discount up to INR 500 on IDBI Bank Card Trxns. Min purchase value INR 2000",
        "5% Instant Discount up to INR 250 on HSBC Cashback Card Credit Card Transactions. Minimum purchase value INR 1000",
        "Saving up to 28% off with GST input credit",
      ],
    };

    console.log(formData);
    postData("formdata",formData);

    setCategory("");
    setSubCategory("");
    setTitle("");
    setImage("");
    setDiscount(0);
    setBrand("");
    setPrice("");
    setDescription("");
    setInStock(true);
    setSoldBy("");
    setFeatures([]);
    setRatings({});
  };

  const postData = (data) => {
    axios.post(`${process.env.REACT_APP_BASE_URL}/products`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("apnidukan")}`,
      },
    }).then((res) => {console.log(res); res.json(); console.log(res);});
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
                  <option value="furniture">Furniture</option>
                  <option value="fitness">Fitness</option>
                  <option value="electronics">Electronics</option>
                  <option value="cloths">Cloths</option>
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
                    <option value="Strength Training">Strength Training</option>
                    <option value="Exercise Machines">Exercise Machines</option>
                  </Select>
                ) : category === "furniture" ? (
                  <Select
                    value={subCategory}
                    onChange={(e) => setSubCategory(e.currentTarget.value)}
                    placeholder="Select sub-category">
                    <option value="bed">Bed</option>
                    <option value="sofa">Sofa</option>
                    <option value="chair">Chair</option>
                    <option value="dining table">Dining table</option>
                    <option value="bookshelf">Bookshelf</option>
                  </Select>
                ) : category === "electronics" ? (
                  <Select
                    value={subCategory}
                    onChange={(e) => setSubCategory(e.currentTarget.value)}
                    placeholder="Select sub-category">
                    <option value="audio">Audio</option>
                    <option value="laptop">Laptop</option>
                    <option value="smart TV">smart TV</option>
                    <option value="Personal computer">Personal computer</option>
                    <option value="Air conditioner">Air conditioner</option>
                  </Select>
                ) : (
                  <Select>
                    <option value="">Please select Category</option>
                  </Select>
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
                  placeholder="Image URLs"
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
              {/* <div style={{ marginBottom: "20px" }}>
                <FormLabel>strike price</FormLabel>
                <Input
                  value={strikePrice}
                  onChange={(e) => setStrikePrice(e.currentTarget.value)}
                  type="number"
                  placeholder="strike price"
                />
              </div> */}
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
                <FormLabel>Discount</FormLabel>
                <Input
                  value={discount}
                  onChange={(e) => setDiscount(e.currentTarget.value)}
                  type="number"
                  placeholder="Discount (%)"
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
              <div style={{ marginBottom: "20px" }}>
                <FormLabel>Sold By</FormLabel>
                <Input
                  value={soldBy}
                  onChange={(e) => setSoldBy(e.currentTarget.value)}
                  type="text"
                  placeholder="soldBy"
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <FormLabel>Features</FormLabel>
                <Input
                  value={features}
                  onChange={(e) => setFeatures(e.currentTarget.value)}
                  type="text"
                  placeholder="Key Features"
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
