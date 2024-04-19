import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import cartSlice from "./features/cart/cartSlice";
import { productsApiSlice } from "./features/products/productsSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    [productsApiSlice.reducerPath]: productsApiSlice.reducer,
  },
  middleware : getDefaultMiddleware => 
    getDefaultMiddleware({
      serializableCheck: false
    }).concat([productsApiSlice.middleware])
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
