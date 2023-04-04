/* eslint-disable jsx-a11y/anchor-is-valid */
import AdminNavbar from "./AdminNavbar";
import React, { useEffect, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import "./AdminProducts.css";
import axios from "axios";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import "./AdminProducts.css";
import Loader from "../Loader";

const AdminProducts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [editPrice, setEditPrice] = useState(0);
  const [saveId, setSaveId] = useState(1);
  const [filters, setFilter] = useState("");

  const { isOpen, onClose, onOpen } = useDisclosure();

  const [data, setData] = useState([]);

  //pagination

  console.log(data);
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerpage = 10;
  const lastIndex = currentPage * recordPerpage;
  const firstIndex = lastIndex - recordPerpage;
  const records = data.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(data.length / recordPerpage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  function prePage() {
    
    if (currentPage !== 1) {
      setCurrentPage(currentPage => currentPage-1);
      console.log(currentPage)
    }
  }

  function changeCurrentPage(id) {
    setCurrentPage(id);
    console.log(currentPage)
  }

  function nextPage() {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage => currentPage + 1);
      console.log(currentPage)
    }
  }

  const getPrice = (id) => {
    axios
      .get(`http://localhost:8080/products/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("apnidukan")}`,
        },
      })
      .then((res) => {
        //console.log(res.data, res.data.price);
        setEditPrice(res.data.price);
      })
      .catch((err) => console.log(err));
  };

  const getData = () => {
    setIsLoading(true);
    axios
      .get("http://localhost:8080/products/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("apnidukan")}`,
        },
      })
      .then((res) => {
        console.log(res.data, "line 57");
        setIsLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };
  //axios.patch(`http://localhost:8080/admin/${id}`, )

  // HANDLE EDIT FUNCTIONALITY
  const handleEditAdmin = (id) => {
    //console.log("inside handleAdmin")
    setIsLoading(true);
    axios
      .patch(
        `http://localhost:8080/products/${id}`,
        { price: +editPrice },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("apnidukan")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        setIsLoading(false);
        getData();
      })
      .catch((err) => console.log(err));
  };
  const handleSubmittedData = (id) => {
    handleEditAdmin(id);
  };

  // HANDLE DELETE FUNCTIONALITY
  const handleDelete = (id) => {
    setIsLoading(true);
    axios
      .delete(`http://localhost:8080/products/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("apnidukan")}`,
        },
      })
      .then((res) => {
        setIsLoading(false);
        getData();
      });
  };

  // HANDLING THE FILTERING PART
  const handleFilter = (filter) => {
    setFilter(filter);
    setIsLoading(true);
    axios
      .get(`http://localhost:8080/products`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("apnidukan")}`,
        },
      })
      .then((res) => {
        //console.log(res.data)
        let data = res.data;
        setIsLoading(false);
        if (filter === "cloths") {
          data = data.filter((el) => {
            return el.category === "cloths";
          });
          setData(data);
          // console.log(data);
        } else if (filter === "furnitures") {
          data = data.filter((el) => {
            return el.category === "furnitures";
          });
          setData(data);
          //console.log(data);
        } else if (filter === "fitness") {
          data = data.filter((el) => {
            return el.category === "fitness";
          });
          setData(data);
          //console.log(data);
        } else if (filter === "electronics") {
          data = data.filter((el) => {
            return el.category === "electronics";
          });
          setData(data);
          //console.log(data);
        }
      })
      .catch((err) => console.log(err));
  };

  // HANDLING THE SORTING PART
  const handleSort = (order) => {
    setIsLoading(true);
    axios
      .get(`http://localhost:8080/products`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("apnidukan")}`,
        },
      })
      .then((res) => {
        setIsLoading(false);
        console.log(res.data);
        let data = res.data;

        if (filters) {
          data = data.filter((el) => {
            return el.category === filters;
          });
          if (order === "asc") {
            data.sort((a, b) => {
              return a.price - b.price;
            });
            setData(data);
            //console.log(data);
          } else {
            data.sort((a, b) => {
              return b.price - a.price;
            });
            setData(data);
            //console.log(data);
          }
        } else {
          if (order === "asc") {
            data.sort((a, b) => {
              return a.price - b.price;
            });
            setData(data);
            //console.log(data);
          } else {
            data.sort((a, b) => {
              return b.price - a.price;
            });
            setData(data);
            //console.log(data);
          }
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, [setData,currentPage]);

  return (
    <div
      style={{ backgroundColor: "#cec6c6", minHeight: "500px", width: "100%" }}>
      <AdminNavbar />

      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className="sorting-filtering-section">
            <Menu>
              {({ isOpen }) => (
                <>
                  <MenuButton
                    isActive={isOpen}
                    as={Button}
                    rightIcon={<ChevronDownIcon />}>
                    {isOpen ? "Sort by" : "Sort by"}
                  </MenuButton>
                  <MenuList>
                    <MenuItem
                      onClick={() => {
                        handleSort("asc");
                      }}>
                      Price: Low to High
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleSort("desc");
                      }}>
                      Price: High to Low
                    </MenuItem>
                  </MenuList>
                </>
              )}
            </Menu>

            <Menu>
              {({ isOpen }) => (
                <>
                  <MenuButton
                    isActive={isOpen}
                    as={Button}
                    rightIcon={<ChevronDownIcon />}>
                    {isOpen ? "Filter by: Category" : "Filter by: Category"}
                  </MenuButton>
                  <MenuList>
                    <MenuItem
                      onClick={() => {
                        handleFilter("cloths");
                      }}>
                      Cloths
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleFilter("furnitures");
                      }}>
                      Furniture
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleFilter("fitness");
                      }}>
                      Fitness
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleFilter("electronics");
                      }}>
                      Electronics
                    </MenuItem>
                  </MenuList>
                </>
              )}
            </Menu>
          </div>
          <div>{/* <Button>Sort  by</Button> */}</div>
          <div
            style={{
              width: "80%",
              margin: "auto",
              display: "flex",
              flexWrap: "wrap",
              border: "1px solid black",
              marginTop: "20px",
              marginBottom: "20px",
              borderRadius: "10px",
              background: "white",
            }}>
            <TableContainer >
              <Table variant="simple">
                {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                <Thead>
                  <Tr>
                    <Th style={{ color: "black", textDecoration: "underline" }}>
                      Sr. No
                    </Th>
                    <Th style={{ color: "black", textDecoration: "underline" }}>
                      Category
                    </Th>
                    <Th
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        color: "black",
                        textDecoration: "underline",
                      }}>
                      Product Name
                    </Th>
                    <Th style={{ color: "black", textDecoration: "underline" }}>
                      Brand
                    </Th>
                    <Th style={{ color: "black", textDecoration: "underline" }}>
                      Price
                    </Th>
                    <Th
                      style={{
                        color: "black",
                        textDecoration: "underline",
                      }}></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {records?.map((el, i) => {
                    return (
                      <Tr key={el._id}>
                        <Td>{((currentPage-1)*10)+ i+1}</Td>
                        <Td>{el.category}</Td>
                        <Td
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                          }}>
                          <img
                          style={{ width: "100px", height: "100px" }}
                          src={el.imageUrls[0]}
                          alt={el.id}
                        />
                          <p>{el.title.substr(0, 30)}</p>
                        </Td>
                        <Td>{el.brand}</Td>
                        <Td>{el.price}</Td>
                        <Td>
                          <Button
                            bg={"white"}
                            onClick={(e) => {
                              onOpen();
                              setSaveId(el._id);
                              getPrice(el._id);
                            }}>
                            <EditIcon />
                            <Modal isOpen={isOpen} onClose={onClose}>
                              <ModalOverlay />
                              <ModalContent>
                                <ModalHeader>
                                  <ModalCloseButton
                                    bg={"white"}
                                    color={"black"}
                                  />
                                </ModalHeader>
                                <ModalBody>
                                  <form
                                    // id={}
                                    onSubmit={(e) => {
                                      e.preventDefault();
                                      //console.log(saveId)
                                      handleSubmittedData(saveId);
                                      onClose();
                                    }}>
                                    <FormControl>
                                      <FormLabel>xxxx</FormLabel>
                                      <Input
                                        isRequired
                                        value={editPrice}
                                        onChange={(e) => {
                                          setEditPrice(e.target.value);
                                          // console.log(editPrice)
                                          // console.log(e.target.value)
                                        }}
                                        type="number"
                                      />
                                      <Button type="submit">Submit</Button>
                                    </FormControl>
                                  </form>
                                </ModalBody>
                                <ModalFooter></ModalFooter>
                              </ModalContent>
                            </Modal>
                          </Button>
                          <Button
                            bg={"white"}
                            onClick={() => {
                              //console.log(el.id)
                              handleDelete(el._id);
                            }}>
                            <DeleteIcon />
                          </Button>
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          </div>
        </div>
      )}

      <nav>
        <ul className="pagination">
          <li className="page-item">
            <button
              className="page-link"
              onClick={prePage}
              disabled={currentPage === 1}
              aria-label="previous page">
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </button>
          </li>
          {numbers.map((n) => (
            <li
              className={`page-item ${currentPage === n ? "active" : ""}`}
              key={n}>
              <button
                className="page-link"
                onClick={() => changeCurrentPage(n)}
                aria-label={`page ${n}`}>
                {n}
              </button>
            </li>
          ))}
          <li className="page-item">
            <button
              className="page-link"
              onClick={nextPage}
              disabled={currentPage === nPage}
              aria-label="next page">
              <span aria-hidden="true">&raquo;</span>
              <span className="sr-only">Next</span>
            </button>
          </li>
        </ul>
      </nav>

      <div
        style={{
          textAlign: "center",
          fontSize: "12px",
          marginTop: "70px",
          paddingBottom: "25px",
        }}>
        Copyright © 2023 Apni Dukan Inc. All Rights Reserved. Accessibility,
        User Agreement, Privacy, Payments Terms of Use, Cookies, Your Privacy
        Choices and AdChoice
      </div>
    </div>
  );
};

export default AdminProducts;
