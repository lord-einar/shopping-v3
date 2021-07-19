import React, { useState } from 'react'
import { useContext } from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import { ShopContext } from '../context/ShopContext'
import ItemCountComponent from './ItemCountComponent'
import CheckoutComponent from './CheckoutComponent'


function ItemDetailComponent({prod}) {

    const {addToCart} = useContext(ShopContext)

    const [openCart, setOpenCart ] = useState(false)
    const onAdd = (cant, estado) => {
        setOpenCart(estado)
        addToCart(prod, cant)
    }


    return (
        <div>
            <Row className='d-flex prod-detail'>
                <Col lg='4'>
                    <Image className='prod-image' src={prod.image} />
                </Col>
                <Col>
                    <h3>{prod.title}</h3>
                    <p>
                        {prod.description}
                    </p>
                    <p>
                        Precio: $ {prod.price}
                    </p>
                    <div>
                        {openCart
                        ? <CheckoutComponent />
                        : <ItemCountComponent onadd={onAdd} prod={prod}  />
                        }
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ItemDetailComponent
