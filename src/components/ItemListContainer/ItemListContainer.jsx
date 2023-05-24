import React, { useState, useEffect } from 'react'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'

export const ItemListContainer = ({ greeting }) => {

    const [data, setData] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const collectionRef = categoryId
            ? query(collection(db, 'Items'), where('category', '==', categoryId))
            : collection(db, 'Items')

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setData(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally({

            })
    }, [categoryId])
    return (
        <>
            <p>{greeting}</p>
            <ItemList data={data} />
        </>
    )
}