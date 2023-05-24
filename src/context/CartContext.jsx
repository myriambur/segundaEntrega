import React, { createContext, useState, useContext } from 'react'

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

 

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            setCart(cart.map(producto=> {
                return producto.id===item.id ? {...producto,quantity: producto.quantity + quantity } : producto
            }))
        }else{
            setCart([...cart,{...item,quantity}])
        } 
    }

    console.log('Carrito',cart)
    const removeItem = (itemId)=>{
        const carUpdated = cart.filter(producto => producto.id !== itemId)
        setCart(carUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId)=>{
        return cart.some(producto => producto.id === itemId)
    }

    const totalPrice = () => {
        return cart.reduce((prev,act) => prev + act.quantity* act.price,0);
    }

    const totalProducts= () => cart.reduce((acumulador,productoActual) => acumulador + productoActual.quantity,0)
    
    const deleteItem =(id)=>setCart(cart.filter(producto=>producto.id!==id))

    return(
        <CartContext.Provider value={{ addItem, removeItem, clearCart,
            deleteItem,totalPrice,totalProducts,cart }}>
    { children }
        </CartContext.Provider >
    )

}
export default CartProvider


