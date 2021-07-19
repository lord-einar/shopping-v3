import Button from 'react-bootstrap/Button'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

function ItemCountComponent({prod, onadd}) {
    
    const [cantidad, setCantidad] = useState(1)

    function sumar(){
        if(cantidad < prod.stock){
            setCantidad(Number(cantidad)+1)
        }
    }
    function restar(){
        if(cantidad > 1) {
            setCantidad(Number(cantidad)-1)
        }
    }
    return (
        <div>
            <div className='d-flex'>
                <Button onClick={restar}>-1</Button>
                    <Form.Control className='text-center' type="text" name="cantidad" readOnly value={cantidad} />
                <Button onClick={sumar}>+1</Button>
            </div>
            <Button className='inline-block m-2' onClick={ () => {onadd(cantidad, true)}} >Agregar al carrito</Button>
        </div>
    )
}

export default ItemCountComponent