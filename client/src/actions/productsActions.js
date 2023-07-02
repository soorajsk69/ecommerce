import axios from "axios";

 export const getAllproducts =() =>async (dispatch)=>{
  dispatch({type : 'GET_REQUEST'})
   try{
    const result =await axios.get('/api/products/getallproducts')
    console.log(result.data);
    dispatch(
      {
         payload:result.data,
         type: "SUCCESS"
      }
    )
 }
catch(error){
dispatch(
  { 
   payload:error,
   type:"FAIL"
}
)
}
 }