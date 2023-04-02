import axios from "axios";

//get cart products;
export const getCheckout = async (payload) => {
    try{
      const res = await axios.get("http://localhost:8080/cart/", { 
          params: payload, //payload -> {_id:["xx,xx,something"]}
          headers: {
            Authorization: `Bearer ${localStorage.getItem("apnidukan")}`,
          },
      });
      return res;
      }
    catch(err){
      return err
    }
};

 // return axios
  //   .get("http://localhost:8080/cart/", {
  //     headers: {
  //       Authorization: localStorage.getItem("token"),
  //     },
  //   })