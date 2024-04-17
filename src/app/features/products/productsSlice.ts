import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../interfaces";
import axiosInstance from "../../../config/axios.config";

interface ProductsState {
  productList: IProduct[],
  loading: boolean,
  error: null
}

const initialState: ProductsState = {
  productList: [],
  loading: true,
  error: null

};

export const getProductList = createAsyncThunk("products/getProductList", async(_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI

  // ** GET Request ..
  try {
    const {data} = await axiosInstance.get("/products?limit=10&select=title,price,thumbnail")
    return data
  } catch (error) {
    return rejectWithValue(error)
  }
})

const productsSlice = createSlice({
  name: "products", // ** Attached with Store
  initialState,
  reducers: {},
  extraReducers: {
    // ** Pending ..
    [`${getProductList.pending}`]: (state) => {
      state.loading = true
    },
    // ** Fulfilled ..
    [`${getProductList.fulfilled}`]: (state, action) => {
      state.loading = false
      state.productList = action.payload
    },
    // ** Rejected ..
    [`${getProductList.rejected}`]: (state, action) => {
      state.loading = false
      state.productList = []
    }
  }
});


export default productsSlice.reducer;
