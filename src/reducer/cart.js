import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalAmount: 0,
        count: 0
    },
    reducers: {
        addToCart: (state, action ) => {
            const item = action.payload;
            const existing = state.items.find(i => i.id === item.id);

            if(existing){
                existing.quantity += 1;
            }else{
                state.items.push({ ...item });
            }

            state.totalAmount += (item.price * item.quantity);
            state.count += item.quantity;
        },
        removeFromCart: (state, action) => {
            const { id, quantity } = action.payload;
            const existing = state.items.find(i => i.id === id);
            if(existing){
                state.count -= quantity;
                state.totalAmount -= existing.price * existing.quantity;
                state.items = state.items.filter(item => item.id !== id);
            }
        },
        updateProdQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const existing = state.items.find(i => i.id === id);
            if(existing){
                const diff = quantity - existing.quantity
                existing.quantity = quantity
                state.count += diff
                state.totalAmount += existing.price * diff;
            }
        }
    }
})

export const { addToCart, removeFromCart, updateProdQuantity } = cartSlice.actions;
export default cartSlice.reducer;