  import { DELETE_PRODUCT } from "./constant";

  const initState = JSON.parse(localStorage.getItem("listCart")) || [];

  const reducer_cart = (state = initState, action) =>  {
    switch (action.type) {
      case DELETE_PRODUCT:
       /*  const updateDelete = state.filter((product)=>
        (product.id != action.payload)) 
        localStorage.setItem("listCart", JSON.stringify(updateDelete));
        return updateDelete; */
        let result=state.filter((item)=>{
          return item.id !== action.payload;
        })
        console.log(result);
        localStorage.setItem("listCart", JSON.stringify(result));
       return result;
      default:
        return state;
    }
  }
  export default reducer_cart