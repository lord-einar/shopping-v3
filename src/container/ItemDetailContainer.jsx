import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import ItemDetailComponent from '../component/ItemDetailComponent';
import { ShopContext } from "../context/ShopContext";

function ItemDetailContainer() {

    const {idProduct} = useParams()
    const {productos} = useContext(ShopContext)
    const [producto, setProducto] = useState()

    
    useEffect(() => {
        console.log('UseEffect cargado')
        const data = productos.find(prd => prd.id = idProduct)
        setProducto(data)
    }, [idProduct])
    return (
        <div className='container'>
            {producto
            ?<ItemDetailComponent prod={producto}/>
            : <p>No hay productos</p>
            }
        </div>
    )
}

export default ItemDetailContainer
