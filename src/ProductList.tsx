import ProductCard from "./components/ProductCard";
import { IProduct } from "./interfaces";
import { useGetProductListQuery } from "./app/features/products/productsSlice";


const ProductList = () => {

  const {isLoading, data, isError} = useGetProductListQuery({})

  console.log({isLoading, data, isError})
  if(isLoading) return <h3>Loading ...</h3>
  
  return (
    <div className="grid grid-cols-1 gap-2 p-2 rounded-md md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-4">
      {data.products.map((product: IProduct) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
