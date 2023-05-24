import React, { useContext } from "react"
import { ItemCart } from "../ItemCart/ItemCart"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import './Cart.css'

const Cart =() => {

    const { cart, totalPrice, clearCart } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className="msjcarrito">
                <h1>No hay items en el carrito</h1>
                <Link to='/' className='blink'>Ver Productos</Link>
            </div> 
        )
    }

    return (
        <div className="tot">
            {cart.map(p => <ItemCart key={p.id} producto={p} />)}
            <h3>Total ${totalPrice()}</h3>
            <button onClick={() => clearCart()}> Limpiar Carrito</button>
            <Link to='/checkout' className='blink'>Emitir compra</Link>
        </div>
    )
}
export default Cart