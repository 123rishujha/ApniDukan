import axios from "axios";
 
//get cart products;
export const getCheckout = async (payload) => {
    try{
      const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/cart/`, { 
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
  //   .get("${process.env.REACT_APP_BASE_URL}/cart/", {
  //     headers: {
  //       Authorization: localStorage.getItem("token"),
  //     },
  //   })