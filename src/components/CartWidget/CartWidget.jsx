import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import cart from './assets/cart.svg'

const CartWidget = () => {

  const { totalProducts } = useContext(CartContext)

  return (
    <Link to='/cart' className="cart--container">
      <img src={cart} alt="cart icon" />
      {totalProducts() || ''}
    </Link>
  )
}

export default CartWidget
