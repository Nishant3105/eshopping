import './App.css';
import Form from './Components/Form';
import Products from './Components/Products';
import { useContext, useState } from 'react';
import Cart from './Components/Cart';
import CartContext from './Context/CartContext';

function App() {
  const [showCart,setShowCart]=useState(false)
  const cartCtx=useContext(CartContext)

  const showHandler=()=>{
    setShowCart((prev=>!prev))
  }

  const hideHandler=()=>{
    setShowCart((prev=>!prev))
  }
  return (
    <>
    <button onClick={showHandler}>Cart <span>({cartCtx.items.length})</span></button>
    {showCart && <Cart onClick={hideHandler}/>}
    <Form/>
    <Products/>
    </>
  );
}

export default App;
