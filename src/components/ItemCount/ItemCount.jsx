import React, { useState } from 'react'
import './ItemCount.css'

export const ItemCount = ({ stock, initial, onAdd }) => {

    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <>
            <section className='ccc'>
                <button onClick={decrement} className='btnClick'>-</button>
                <h4>{quantity}</h4>
                <button onClick={increment} className='btnClick'>+</button>

                <div>
                    <button onClick={() => onAdd(quantity)} disabled={!stock} className='counter'>
                        Agregar</button>
                </div>
            </section>
        </>


    )
}