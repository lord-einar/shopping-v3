import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Cart3 } from 'react-bootstrap-icons'
import { ShopContext } from '../context/ShopContext';


function CartWidgetComponent() {

    const {cart} = useContext(ShopContext)

    const [items, setItems] = useState(0)

    useEffect(() => {

        if(cart){
            let totalItems = 0
            cart.map(prod => {
                return totalItems+= prod.cantidad
            })
            setItems(totalItems)
        } else {
            console.log("nada")
        }
    },[cart])

    return (
        <>
        {(items !== 0) 
            ?
            <div>
                <Link to={'/cart'} className='cart-icon'><Cart3 size='25' />{items}</Link>
            </div>
            :
            null
        }
        </>
    )
}

export default CartWidgetComponent