import React, { useContext } from 'react'
import Modal from '../Store/Modal'
import CartContext from '../Context/CartContext'

const Cart = (props) => {
    const cartCTx=useContext(CartContext)
    
    const cartItems=cartCTx.items.map((prod,index)=>(
        <li key={index}>
            Title: {prod.title} - 
            Price: {prod.price} - 
            Size: {prod.size} -
            quantity: {prod.quantity}
            <button type="submit" onClick={()=>cartCTx.removeItem(prod._id)}>Remove</button>
        </li>
    ))
  return (
    <Modal onClick={props.onClick}>
      <ul>
        {cartItems}
      </ul>
    </Modal>
  )
}

export default Cart