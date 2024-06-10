import { createSlice } from "@reduxjs/toolkit";

interface State {
    img: string;
    price: number | null;
    title: string
}


const initialState: State[] = [{
    img: "",
    price: null,
    title: ""
}]


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const addCart = cartSlice.actions.addCart;
export default cartSlice.reducer;