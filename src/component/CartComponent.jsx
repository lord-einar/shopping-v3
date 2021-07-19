import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Alert, Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import './CartComponent.css'

function CartComponent() {

    const {cart, removeToCart, borrarCarrito} = useContext(ShopContext)
    const [total, setTotal]= useState(0)

    useEffect( () => {
        if(cart){
            let montoFinal = 0
            cart.map(producto => {
                return montoFinal+= producto.subtotal
            })
            setTotal(montoFinal)
        }
    }, [cart])

    return (
        <>
            <h1 className='titulo-portada'>Carrito de compras</h1>

            
            {cart.length !== 0
            ?<div>
            {cart.map(prod =>
            <Card className='col-auto card-detail'>
                <Row>
                    <Col className='col-4' >
                        <Card.Img className='col-7' src={prod.image}></Card.Img>
                    </Col>
                    <Col className='col-8'>
                        <Card.Body>
                            <Card.Title>{prod.title}</Card.Title>
                            <Card.Text>Cantidad: {prod.cantidad} </Card.Text>
                            <Card.Text>
                                Precio: $ {prod.price}
                            </Card.Text>
                            <Card.Text>
                                Subtotal $ {prod.subtotal}
                            </Card.Text>
                        </Card.Body>
                    </Col>
                    <Button className='quitar-carrito' onClick={() => removeToCart(prod.id)}>Quitar del carrito</Button>
                </Row>
            </Card>
            )}
            

            <div className='total-carrito'>
                <Row>
                    <Col>
                        <Button className='btn btn-danger' onClick={borrarCarrito}>Limpiar carrito</Button>
                    </Col>
                    <Col>
                        <Alert variant='danger'>
                            Total: {total}
                        </Alert>
                    </Col>
                    <Col>
                        <Button className='btn btn-success'>FINALIZAR COMPRA</Button>
                    </Col>
                </Row>
            </div>
            </div>
            :
            <div className='card carrito-vacio'>
                <Row>
                    <Col>
                        <div className='carrito-vacio'>
                            No tienes productos en tu carrito
                            Te invitamos a visitar la tiendas
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to='/'><Button className='btn btn-primary'>BUSCAR PRODUCTOS</Button></Link>
                    </Col>
                </Row>
            </div>
            }
        </>
    )
}

export default CartComponent
