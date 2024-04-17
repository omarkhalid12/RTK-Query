import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../interfaces";
import { addItemToShoppingCart } from "../../../utils/Functions";
import { RootState } from "../../store";

interface CounterState {
  cartItems: IProduct[]
}

const initialState: CounterState = {
  cartItems: []
};

const cartSlice = createSlice({
  name: "cart", // ** Attached with Store
  initialState,
  reducers: {
    // ** Actions (function(num))
    addItemToCartAction: (state, actionPayload: PayloadAction<IProduct>)=> {
      state.cartItems = addItemToShoppingCart(state.cartItems, actionPayload.payload)
    }
  },
});

export const { addItemToCartAction } = cartSlice.actions;
export const cartSelector = ({cart}: RootState)=> cart

export default cartSlice.reducer;
