import React, { useState,useEffect,useCallback } from "react";

const CartContext = React.createContext({
  items: [],
  addToCart: () => {},
  removeItem: (id) => {}
})

export const CartContextProvider = (props) => {
  const [items,setItems]=useState([])

  const url="https://crudcrud.com/api/6ccaa15125fd4741ae5baaf3c299a660/cart"

  const getCartItems=useCallback(async ()=>{
    try{
      const response=await fetch(url,{
        headers: {
          'Content-Type': 'application/json'
        },
      })
      if(response.ok){
        const data=await response.json()
        setItems(data)
      }
      else if(!response.ok){
        throw new Error('Something went wrong!')
      }

    }catch(error){
      alert(error.message)
    }
  },[])

  useEffect(()=>getCartItems(),[getCartItems])

  const addToCartHandler=async (prod)=>{
    try{
      const response=await fetch(url,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({...prod, quantity: 1})
      })
      if(response.ok){
        const data=await response.json()
        setItems([...items, data])
      }
      else if(!response.ok){
        throw new Error('Something went wrong!')
      }

    }catch(error){
      alert(error.message)
    }
  }

  const removeItemHandler=async (id)=>{
    try{
      const updatedItems=items.filter((prod)=>prod._id!==id)
      const response=await fetch(url+"/"+id,{
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if(response.ok){
        setItems(updatedItems)
      }
      else if(!response.ok){
        throw new Error('Something went wrong!')
      }
    }catch(error){
      alert(error.message)
    }
  }

  const contextValues = {
    items: items,
    addToCart: addToCartHandler,
    removeItem: removeItemHandler
  }
  return (
    <CartContext.Provider value={contextValues}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartContext