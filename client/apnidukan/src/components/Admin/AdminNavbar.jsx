import { Menu, MenuButton, MenuList, MenuItem, Box } from "@chakra-ui/react";
import React from "react";
import "./Admin_Navbar.css";
import { useNavigate } from "react-router-dom";

const AdminNavbar = () => {

  const navigate = useNavigate();

  const redirect_AddProducts = () => {
    console.log("add products page")
    navigate("/addProduct");
  };

  const redirect_AdminProducts = () => {
    navigate("/adminProducts");
  };

  const redirect_AdminHome = () => {
    navigate("/admin");
  };

  const handleSignOut = () => {
    navigate("/");
  };

  const logoClicked = () => {
    navigate("/");
  };

  return (
    <div className="nav_main" style={{marginTop: "50px"}}>
      <div className="nav_logo" onClick={logoClicked}>
        <img src="https://www.linkpicture.com/q/apni_dukan_admin_logo.png" alt="logo" />
      </div>
      <div className="navigate_section">
        <div onClick={redirect_AdminHome} className="navigate_section_home">
          <b>Dashboard</b>
        </div>
        <div
          onClick={redirect_AdminProducts}
          className="navigate_section_products">
          <b>Products</b>
        </div>
      </div>

      <div className="add_product_btn_div">
        <button onClick={redirect_AddProducts}>
          <b>Add Product</b>
        </button>
      </div>

      <div className="nav_drop_down_section">
        <Menu>
          <div className="dropbtn_text">
            <MenuButton  backgroundColor={"#092546"}>Settings</MenuButton>
          </div>
          <MenuList marginTop={"15px"} border={"1px solid black"}>
            <MenuItem>
              <b>Profile</b>
              <Box marginLeft={3}></Box>
            </MenuItem>
            <MenuItem>
              <b>Order History</b>
              <Box marginLeft={3}></Box>
            </MenuItem>
            <MenuItem>
              <b>Help & Contact</b>
              <Box marginLeft={3}></Box>
            </MenuItem>
            <MenuItem onClick={handleSignOut}>
              <b>Sign Out</b>
              <Box marginLeft={3}></Box>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};

export default AdminNavbar;
