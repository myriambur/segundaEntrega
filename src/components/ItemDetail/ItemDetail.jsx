import React, { useState } from 'react'
import './ItemDetail.css'
import { ItemCount } from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { useContext } from 'react'

export const ItemDetail = ({ data }) => {
    const [goToCart, setGoToCart] = useState(false)

    const { addItem } = useContext(CartContext)


    const onAdd = (quantity) => {
        setGoToCart(true)
        addItem(data, quantity)

    }


    return (
        <>
            <div className='tarjetas'>
                <article className='tarjeta'>
                    <figure className='card-col-img'>
                        <img src={data.img} alt="" className='img-figure' />
                    </figure>

                    <div className='tarjeta-info'>
                        <h2>{data.name}</h2>
                        <p>{data.detail}</p>
                        <footer className='caja'>
                            {
                                goToCart
                                    ? <Link to='/cart' className='btnDetail'>Terminar compra</Link>
                                    : <ItemCount initial={3} stock={data.stock} onAdd={onAdd} />
                            }
                        </footer>

                    </div>
                </article>
            </div>
        </>

    )
}

export default ItemDetail