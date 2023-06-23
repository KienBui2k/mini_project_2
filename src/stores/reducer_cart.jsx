const initState = JSON.parse(localStorage.getItem("listCart")) || [];

 const reducer_art = (state = initState, action) =>  {
  switch (action.type) {
    default:
      return state;
  }
}
export default reducer_art