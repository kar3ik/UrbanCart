import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";


const store = configureStore({
    reducer:{
        cart : CartSlice
        // name : nameSlice

    }
})

export default store


// a store with a cart name slice 