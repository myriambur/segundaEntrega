import React from 'react'
import './ItemDetail.css'
import { useNavigate } from 'react-router-dom'

export const ItemDetail = ( props ) => {

    const { id, name, img,category,detail } = props

    const navigate = useNavigate()

    const onReturn = () => {
        navigate(-1)
    }

    return (
        <article className='detail'>
            <section >
                <h2 >{props.name}</h2>
                <p >Categoría: {props.category}</p>
                <p >Detalle: {props.detail}</p>
            </section>
            <button onClick={onReturn} className='btnDetail'>Volver</button>
        </article>
    )
}