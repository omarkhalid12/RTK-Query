import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../interfaces";
import axiosInstance from "../../../config/axios.config";
import { RootState } from "../../store";

interface ProductsState {
  data: IProduct[],
  loading: boolean,
  error: null
}

const initialState: ProductsState = {
  data: [],
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
      state.data = action.payload
    },
    // ** Rejected ..

    [`${getProductList.rejected}`]: (state, action) => {
      state.loading = false
      state.data = []
      state.error = action.payload
    }
  }
});

export const productsSelector = ({products}: RootState)=> products
export default productsSlice.reducer;
