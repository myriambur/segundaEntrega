import React, { useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import './ItemCart.css'

export const ItemCart = (({ producto }) => {
  const { quantityadded, setQuantityadded } = useState(0)

  const handleOnAdd = (quantity) => {
    setQuantityadded(quantity)
  }

  const { deleteItem } = useContext(CartContext)

  return (
    <div className='itemCart'>
      <img src={producto.img} />
      <section>
        <h4>{producto.name}</h4>
        <h4>Precio por unidad: ${producto.price}</h4>
        <h4>Cantidad: {producto.quantity}</h4>
        <p>Subtotal ${producto.quantity * producto.price} </p>
        <button onClick={() => deleteItem(producto.id)} className='btnDetail'>Eliminar producto</button>
      </section>

    </div>
  )
})