import React from 'react'
import { useState, useEffect } from 'react'
import { getProductById } from '../../products_mock'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState(null)
    
    const { itemId } = useParams() 

    useEffect(() => {
        getProductById(itemId)
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [itemId])
    
    return (
        <div className="itmDtl">
            <ItemDetail {...product} />
        </div>
    )
}