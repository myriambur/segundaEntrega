import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'

export const ItemList = ({data=[]}) => {
    return (
    <div className="lista">
        {data.map(prd => <Item key={prd.id} data={prd} />)}
    </div>
    )
}