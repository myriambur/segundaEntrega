import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'

export const ItemList = ({products}) => {
    return (
    <div className="lista">
        {products.map(prd => <Item key={prd.id} {...prd} />)}
    </div>
    )
}

export default ItemList
