import axios from "axios";

//get cart products;
export const getOrder = async () => {
  // return axios
  //   .get("${process.env.REACT_APP_BASE_URL}/cart/", {
  //     headers: {
  //       Authorization: localStorage.getItem("token"),
  //     },
  //   })
    try{
      const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/order/`, {
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
  return axios.post(`${process.env.REACT_APP_BASE_URL}/order/add`,payload,{
    headers: {
      Authorization: `Bearer ${localStorage.getItem("apnidukan")}`,
    }
  }); // payload could be array or object;
}

