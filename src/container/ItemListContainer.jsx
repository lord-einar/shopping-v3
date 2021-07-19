import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemListComponent from '../component/ItemListComponent'
import { ShopContext } from '../context/ShopContext'

function ItemListContainer() {

    const { setCategory } = useContext(ShopContext)
    const {idCategory} = useParams()

    useEffect (() =>{
        setCategory(idCategory)
    },[idCategory])

    return (
        <>
            <div className='container card-list'>
                <ItemListComponent />
            </div>
        </>
    )
}

export default ItemListContainer
