import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItem:[],
    cartOpen:false
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        additem(state,action){
               
             const newitem = action.payload.id;

             const existingid = state.cartItem.find(item => item.id == action.payload)

            if (existingid) {
              existingid.quantity++
            } else {
              state.cartItem.push(action.payload)
            }
          },


          removeitem(state,action){
            state.cartItem = state.cartItem.filter(item => item.id !== action.payload)
          },

          incrementqty(state,action){
            state.cartItem.map(item =>{
              if (item.id == action.payload) {
                item.quantity++
              } 
              return item
            })
          },

          decrementqty(state,action){
            state.cartItem.map(item =>{
              if (item.id == action.payload) {
                item.quantity--
              } 
              return item
            })
          },
          
          
          togglecart(state,action){
            state.cartOpen = action.payload;
          }

         }
})

export const {additem, removeitem,incrementqty,decrementqty,togglecart}  = cartSlice.actions;

export default cartSlice.reducer