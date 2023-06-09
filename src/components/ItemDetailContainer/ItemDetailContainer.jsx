import React from 'react'
import { useState, useEffect } from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom'
import { getFirestore, doc, getDoc } from 'firebase/firestore'

export const ItemDetailContainer = () => {
    const [data, setData] = useState({})

    const { detalleId } = useParams()

    useEffect(() => {

        const querydb = getFirestore()
        const queryDoc = doc(querydb, 'Items', detalleId)
        getDoc(queryDoc)
            .then(res => setData({ id: res.id, ...res.data() }))
    }, [])

    return (
        <ItemDetail data={data} className='itmDtl'/>
    )
}