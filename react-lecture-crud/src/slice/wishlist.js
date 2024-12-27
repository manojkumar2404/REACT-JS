import { createSlice } from "@reduxjs/toolkit";

// reducer + action  initialState - 0 
//initialState
const initialState = {

      wishitem:[], // 0 display 
      wishopen: false
}

// reducer + action(additem)

  const wishSlice = createSlice({
           name:'wish', // reducer 
           initialState,
           reducers: {
              //action 
            additemwish(state,action){
              
            },

            removeitemwish(state,action){

            },

            incrementqtywish(state,action){

            },

            decrementqtywish(state,action){

            },
            
            togglecartwish(state,action){

            }

           }


  })

  export const {additemwish,removeitemwish,incrementqtywish,decrementqtywish,togglecartwish}  =  wishSlice.actions;

  export default wishSlice.reducer