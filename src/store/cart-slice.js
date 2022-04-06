import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice ({
    name: "cart",
    initialState: {
        itemsList: [],
        totalQuantity: 0,
        showCart: false
    },
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload
            //to check if the item is available
            const existingItem = state.itemsList.find((item) => item._id === newItem._id)
            if(existingItem){
                existingItem.quantity++
                existingItem.totalPrice += newItem.price
            }else{
                state.itemsList.push({
                    _id: newItem._id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    productName: newItem.productName
                })
                    state.totalQuantity++
            }
        },
        removeFromCart(state, action){
                const _id = action.payload
                
                const existingItem = state.itemsList.find((item) => item._id === _id)
                if(existingItem.quantity === 1){
                    state.itemsList = state.itemsList.filter((item) => item.id !== _id)
                    state.totalQuantity--
                }else{
                    existingItem.quantity--
                    existingItem.totalPrice -= existingItem.price
                }
        },
        setShowCart(state){
            state.showCart = !state.showCart
        }
    }
})
export const cartActions = cartSlice.actions;

export default cartSlice;