import { createSlice } from '@reduxjs/toolkit'

import Swal from 'sweetalert2';



const initialState = {
    cartItems: [],
    value: 0,
}


const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find(item => item._id === action.payload._id);
            if (!existingItem) {
                state.cartItems.push(action.payload);
                //alert("Item added successfully");
                Swal.fire({  // https://sweetalert2.github.io/
                    icon: "success",
                    title: "Item added successfully",
                    showConfirmButton: false,
                    timer: 1500
                });

            } else {
                //alert("item already exists");
                Swal.fire({
                    icon: "error",
                    title: "item already exists",
                  });
            }
        },
        removeFromCart: (state, action) => {
            state.cartItems =  state.cartItems.filter(item => item._id !== action.payload._id)
        },
        clearCart: (state) => {
            state.cartItems = []
        }
    }
});


// export the actions
export const { addToCart, removeFromCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;

