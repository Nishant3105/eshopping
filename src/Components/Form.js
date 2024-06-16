import React, { useContext, useRef } from 'react'
import ProductsContext from '../Context/ProductContext'

const Form = () => {
    const nameRef=useRef()
    const descriptionRef=useRef()
    const priceRef=useRef()
    const largesizeRef=useRef()
    const middlesizeRef=useRef()
    const smallsizeRef=useRef()
    const idRef=useRef()

    const productCtx=useContext(ProductsContext)

    const submitHandler=(e)=>{
        e.preventDefault()
        const enteredName=nameRef.current.value
        const enteredDescription=descriptionRef.current.value
        const enteredPrice=priceRef.current.value
        const enteredLargeSize=largesizeRef.current.value
        const enteredMiddleSize=middlesizeRef.current.value
        const enteredSmallSize=smallsizeRef.current.value
        const enteredId=idRef.current.value

        const formData={
            id:enteredId,
            enteredName,
            enteredDescription,
            enteredPrice,
            large:enteredLargeSize,
            middle:enteredMiddleSize,
            small:enteredSmallSize
        }

        productCtx.addProduct(formData)
    }
  return (
    <form>
        <label htmlFor="id">Id</label>
        <input id="id" type="number" ref={idRef}/>
        <label htmlFor="name">Tshirt-Name</label>
        <input id="name" type="text" ref={nameRef}/>
        <label htmlFor="description">Description</label>
        <input id="description" type="text" ref={descriptionRef}/>
        <label htmlFor="price">Price</label>
        <input id="price" type="number" ref={priceRef}/>
        <label htmlFor="lsize">L</label>
        <input id="lsize" type="number" ref={largesizeRef}/>
        <label htmlFor="msize">M</label>
        <input id="msize" type="number" ref={middlesizeRef}/>
        <label htmlFor="ssize">S</label>
        <input id="ssize" type="number" ref={smallsizeRef}/>
        <button type="submit" onClick={submitHandler}>Submit</button>
    </form>
  )
}

export default Form