import ProductCard from "./components/ProductCard";
import { IProduct } from "./interfaces";
import { useEffect } from "react";
import { getProductList } from "./app/features/products/productsSlice";
import { useAppDispatch } from "./app/store";

const ProductList = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getProductList())
  }, [dispatch])
  
  return (
    <div className="grid grid-cols-1 gap-2 p-2 rounded-md md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-4">
      {[].map((product: IProduct) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
