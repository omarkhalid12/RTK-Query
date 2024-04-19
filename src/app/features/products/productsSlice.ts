import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApiSlice = createApi({
  reducerPath: "products",
  tagTypes: ['Products'],
  baseQuery: fetchBaseQuery({baseUrl: "https://dummyjson.com"}),
  endpoints: builder => ({
    getProductList: builder.query({
      query: () => {
        return {
          // ** => {baseUrl}/products ..
          url: "/products"
        }
      }
    })
  }),
})

export const { useGetProductListQuery } = productsApiSlice
