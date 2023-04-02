import React, { useEffect, useState } from "react";
import styles from "./product.module.css";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Checkbox,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initalOrder = searchParams.get("sort");
  const initialState = searchParams.getAll("subCategory");
  const initialCategory = searchParams.getAll("category");
  const [subCategory, setsubcategory] = useState(initialState || []);
  const [category, setcategory] = useState(initialCategory || []);
  const [sort, setSort] = useState(initalOrder || "");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    let value = ( e.target.value);

    let newCategory = [...subCategory];

    if (newCategory.includes(value)) {
      newCategory.splice(newCategory.indexOf(value), 1);
    } else {
      newCategory.push(value);
    }

    setsubcategory(newCategory);
  };

  const handleCategory = (e) => {
    let value = ( e.target.value);

    let newCategory = [...category];

    if (newCategory.includes(value)) {
      newCategory.splice(newCategory.indexOf(value), 1);
    } else {
      newCategory.push(value);
    }

    setcategory(newCategory);
  };

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  useEffect(() => {
    let param = {
      subCategory,
      category
    };

    sort && (param.sort = sort);

    setSearchParams(param);
  }, [subCategory, sort,category]);
console.log("filters",)
  return (
    <div className={styles.sidebar}>
        <div>
        <h5 style={{margin:"15px",fontWeight:"bolder",padding:"10px",fontSize:"25px"}} >Category</h5>
        <div style={{ paddingLeft: "10px" }}>
          <Checkbox
            value={"electronics"}
            onChange={(e) => handleCategory(e)}
            defaultChecked={category.includes("electronics")}
            colorScheme="green"
          >
           <label htmlFor="">Electronics</label>
          </Checkbox>

          <br />
          <Checkbox
            value="fitness"
            onChange={(e) => handleCategory(e)}
            defaultChecked={category.includes("fitness")}
            colorScheme="green"
          >
         <label htmlFor="">Fitness</label>
          </Checkbox>

          <br />
          <Checkbox
            value={"cloths"}
            onChange={(e) => handleCategory(e)}
            defaultChecked={category.includes("cloths")}
            colorScheme="green"
          >
            <label htmlFor="">Cloths</label>
          </Checkbox>

          <br />
          <Checkbox
            value={"furniture"}
            onChange={(e) => handleCategory(e)}
            defaultChecked={category.includes("furniture")}
            colorScheme="green"
          >
            <label htmlFor="">Furniture</label>
          </Checkbox>

          <br />
        </div>
      </div>
      <div>
        <h5 style={{margin:"15px",fontWeight:"bolder",padding:"10px",fontSize:"30px"}}>Price</h5>
        <div className={styles.price_slider}>
        <div>
        <input
         
          type="radio"
          value="asc"
          name="sort"
          onChange={(e) => handleSort(e)}
          defaultChecked={sort === "asc"}
        />
        <label style={{fontSize:"25px",marginLeft:"15px"}}>  Low to High</label>
        <br />
        <input
         
          type="radio"
          value="desc"
          name="sort"
          onChange={(e) => handleSort(e)}
          defaultChecked={sort === "desc"}
        />
        <label style={{fontSize:"25px",marginLeft:"15px"}}>High to Low</label>
      </div>

          <br />
        </div>
      </div>

      <div>
        <h5 style={{margin:"15px",fontWeight:"bolder",padding:"10px",fontSize:"25px"}} >SubCategory</h5>
        <div style={{ paddingLeft: "10px" }}>
          <Checkbox
            value={"audio"}
            onChange={(e) => handleChange(e)}
            defaultChecked={subCategory.includes("audio")}
            colorScheme="green"
          >
           Audio
          </Checkbox>

          <br />
          <Checkbox
            value={"Strength Training"}
            onChange={(e) => handleChange(e)}
            defaultChecked={subCategory.includes("Strength Training")}
            colorScheme="green"
          >
            Strength Training
          </Checkbox>

          <br />
          <Checkbox
            value={"laptop"}
            onChange={(e) => handleChange(e)}
            defaultChecked={subCategory.includes("laptop")}
            colorScheme="green"
          >
            Laptop
          </Checkbox>

          <br />
          <Checkbox
            value={"Gymnastics"}
            onChange={(e) => handleChange(e)}
            defaultChecked={subCategory.includes("Gymnastics")}
            colorScheme="green"
          >
           Gymnastics
          </Checkbox>

          <br />
          <Checkbox
            value={"Exercise Machines"}
            onChange={(e) => handleChange(e)}
            defaultChecked={subCategory.includes("Exercise Machines")}
            colorScheme="green"
          >
            Exercise Machines
          </Checkbox>

          <br />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
