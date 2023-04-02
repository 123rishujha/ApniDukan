import axios from "axios";

//get cart products;
export const getCheckout = async (payload) => {
  // return axios
  //   .get("http://localhost:8080/cart/", {
  //     headers: {
  //       Authorization: localStorage.getItem("token"),
  //     },
  //   })
    try{
      const res = await axios.get("http://localhost:8080/cart/",payload, { //payload -> {_id:["xx,xx,something"]}
          headers: {
            Authorization: localStorage.getItem("token"),
          },
      });
      // console.log("hello")
      // console.log(res,"from api");
      return res;
      }
    catch(err){

    }
};

