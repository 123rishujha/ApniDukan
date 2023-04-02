import axios from "axios";

//get cart products;
export const getOrder = async () => {
  // return axios
  //   .get("http://localhost:8080/cart/", {
  //     headers: {
  //       Authorization: localStorage.getItem("token"),
  //     },
  //   })
    try{
      const res = await axios.get("http://localhost:8080/order/", {
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

export const postOrder = async (payload) =>{
  return axios.post("http://localhost:8080/order/add",payload,{
    headers: {
      Authorization: `Bearer ${localStorage.getItem("apnidukan")}`,
    }
  }); // payload could be array or object;
}

