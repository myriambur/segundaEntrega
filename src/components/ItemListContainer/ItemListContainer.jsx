import React from 'react'
import { useState, useEffect} from 'react'
import { getProducts, getProductsByCategory } from '../../products_mock'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

export const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])

    const { categoryId } = useParams() 

    useEffect(() => {

        const asyncFunc = categoryId ? getProductsByCategory : getProducts
        
        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })

    }, [categoryId])

    return (
        <div>
            <p>{greeting}</p>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer