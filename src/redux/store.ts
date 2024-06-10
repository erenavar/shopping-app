import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./feature/counterSlice/reducer";

const store = configureStore({
    reducer: {
        cart: cartSlice
    }
})

export { store };

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch