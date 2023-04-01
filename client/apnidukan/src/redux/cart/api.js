import axios from "axios";

//get cart products;
export const getCart = async () => {
  // return axios
  //   .get("http://localhost:8080/cart/", {
  //     headers: {
  //       Authorization: localStorage.getItem("apnidukan"),
  //     },
  //   })
    try{
      const res = await axios.get("http://localhost:8080/cart/", {
                        headers: {
                          Authorization: `Bearer ${localStorage.getItem("apnidukan")}`,
                        },
                      });
      // console.log("hello")
      // console.log(res,"from api");
      return res;
      }
    catch(err){

    }
};

//post  cart item
export const postCart = (payload) => {
 return axios
    .post("http://localhost:8080/cart/add", payload, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("apnidukan")}`,
      },
    })
    // .then((res) => res.data)
    // .catch((err) => err);
};

// update cart item quantity;
export const updateCart = (id, payload) => {
  console.log("called");
 return axios
    .patch(`http://localhost:8080/cart/update/${id}`, payload, { //payload-> {qtn:value}
      headers: {
        Authorization: `Bearer ${localStorage.getItem("apnidukan")}`,
      },
    })
    // .then((res) => res.data)
    // .catch((err) => err);
};

// delete cart item
export const deleteCart = (id) => {
 return axios
    .delete(`http://localhost:8080/cart/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("apnidukan")}`,
      },
    })
    // .then((res) => res.data)
    // .catch((err) => err);
};
