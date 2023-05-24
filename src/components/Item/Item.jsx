import React, { useState } from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ data }) => {

    return (

        <Link to={`/detalle/${data.id}`} className='link' >
            <div className='container'>
                <div className='card'>
                    <figure className='card-figure'>
                        <img src={data.img} alt="" />
                    </figure>
                    <div className='contenido'>
                        <p>${data.price}</p>
                        <h3>{data.name}</h3>
                    </div>
                </div>
            </div>
        </Link >
    )
}

export default Item