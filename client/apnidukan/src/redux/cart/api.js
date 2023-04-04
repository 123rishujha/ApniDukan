import axios from "axios";

//get cart products;
export const getCart = async () => {
  // return axios
  //   .get("${process.env.REACT_APP_BASE_URL}/cart/", {
  //     headers: {
  //       Authorization: localStorage.getItem("apnidukan"),
  //     },
  //   })
    try{
      const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/cart/`, {
                        headers: {
                          Authorization: `Bearer ${localStorage.getItem("apnidukan")}`,
                        },
                      });
      // console.log("hello")
      // console.log(res,"from api");
      return res;
      }
    catch(err){
      return err
    }
};

//post  cart item
export const postCart = (payload) => {
 return axios
    .post(`${process.env.REACT_APP_BASE_URL}/cart/add`, payload, {
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
    .patch(`${process.env.REACT_APP_BASE_URL}/cart/update/${id}`, payload, { //payload-> {qtn:value}
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
    .delete(`${process.env.REACT_APP_BASE_URL}/cart/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("apnidukan")}`,
      },
    })
    // .then((res) => res.data)
    // .catch((err) => err);
};
