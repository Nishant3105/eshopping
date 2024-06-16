import React, { useState } from "react";

const ProductsContext = React.createContext({
    items: [],
    addProduct: () => { },
    largepurchase: () => { },
    middlepurchase: () => { },
    smallpurchase: () => { }
})

export const ProductsContextProvider = (props) => {
    const [items, setItems] = useState([])

    const addProductHandler = (prod) => {
        console.log(prod)
        setItems((prevItems) => [...prevItems, prod])
    }

    const largepurchaseHandler = (id) => {
        const updatedProducts = items.map(prod => prod.id !== id ? prod : { ...prod, large: Number(prod.large)-1})
        setItems(updatedProducts)
    }

    const middlepurchaseHandler = (id) => {
        const updatedProducts = items.map(prod => prod.id !== id ? prod : { ...prod, middle: Number(prod.middle)-1})
        setItems(updatedProducts)
    }

    const smallpurchaseHandler = (id) => {
        const updatedProducts = items.map(prod => prod.id !== id ? prod : { ...prod, small: Number(prod.small)-1})
        setItems(updatedProducts)
    }

    const contextValues = {
        items: items,
        addProduct: addProductHandler,
        largepurchase: largepurchaseHandler,
        middlepurchase: middlepurchaseHandler,
        smallpurchase: smallpurchaseHandler
    }
    return (
        <ProductsContext.Provider value={contextValues}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export default ProductsContext