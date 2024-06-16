import React, { useContext } from 'react'
import ProductsContext from '../Context/ProductContext'
import CartContext from '../Context/CartContext'

const Products = () => {
  const productCtx = useContext(ProductsContext)
  const cartCtx=useContext(CartContext)

  let productsList = []
  if (productCtx.items) {
    productsList = productCtx.items.map((prod, index) => (
      <li key={index}>
        title: {prod.enteredTitle} - 
        description: {prod.enteredDescription} - 
        price: {prod.enteredPrice} - 
        <button onClick={()=>{productCtx.largepurchase(prod.id);cartCtx.addToCart({id:prod.id,title:prod.enteredTitle,price:prod.enteredPrice,size:'large'})}}>Large({prod.large})</button>
        <button onClick={()=>{productCtx.middlepurchase(prod.id);cartCtx.addToCart({id:prod.id,title:prod.enteredTitle,price:prod.enteredPrice,size:'medium'})}}>Medium({prod.middle})</button>
        <button onClick={()=>{productCtx.smallpurchase(prod.id);cartCtx.addToCart({id:prod.id,title:prod.enteredTitle,price:prod.enteredPrice,size:'small'})}}>Small({prod.small})</button>
      </li>
    ))
  }
  return (
    <ul>
      {productsList}
    </ul>
  )
}

export default Products