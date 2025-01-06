import { createSlice } from "@reduxjs/toolkit";

// reducer + action  initialState - 0 
//initialState
const initialState = {

      cartitem:[], // 0 display 
      cartopen: false
}

// reducer + action(additem)


  const cartSlice = createSlice({
           name:'cart', // reducer 
           initialState,
           reducers: {
              //action 
            additem(state,action){
              
              const newitem = action.payload.id;

              const existingid = state.cartitem.find(item => item.id == newitem)

              if (existingid) {
                existingid.quantity++
              } else {
                state.cartitem.push(action.payload)
              }
            },

            //cartitem id or payload id dont same   for delete

            removeitem(state,action){

              state.cartitem = state.cartitem.filter(item => item.id !== action.payload)
            },

            incrementqty(state,action){
              state.cartitem.map(item =>{
                if (item.id == action.payload) {
                  item.quantity++
                } 
                return item
              })
            },

            decrementqty(state,action){
              state.cartitem.map(item =>{
                if (item.id == action.payload) {
                  item.quantity--
                } 
                return item
              })
            },
            
            
            togglecart(state,action){
              state.cartopen = action.payload;
            }

           }


  })

  export const {additem, removeitem,incrementqty,decrementqty,togglecart}  = cartSlice.actions;

  export default cartSlice.reducer