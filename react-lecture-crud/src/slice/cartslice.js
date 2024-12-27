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
              
              // eslint-disable-next-line no-undef
              newitem = action.payload.id;

              // eslint-disable-next-line no-undef
              existingid = state.cartitem.find(item => item.id == newitem)

              // eslint-disable-next-line no-undef
              if (existingid) {
                // eslint-disable-next-line no-undef
                existingid.quantity++
              } else {
                state.cartitem.push(action.payload)
              }
            },

            removeitem(state,action){

              // eslint-disable-next-line no-undef
              state.cartitem = state.cartitem.filter(item => item.id !== newitem)
            },

            incrementqty(state,action){

            },

            decrementqty(state,action){

            },
            
            togglecart(state,action){

            }

           }


  })

  export const {additem, removeitem,incrementqty,decrementqty,togglecart}  = cartSlice.actions;

  export default cartSlice.reducer