import { IProduct } from "../interfaces";

export const addItemToShoppingCart = (cartItems: IProduct[], product: IProduct) => {
  const exists = cartItems.find(item => item.id === product.id)
  console.log(exists)
  if(exists) {
    return cartItems.map(item => (item.id === product.id ? { ...item, qty: item.qty + 1} : item))
  }
  return [...cartItems, {...product, qty: 1}]
}