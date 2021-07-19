import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'


function ItemDetailComponent({prod}) {


    return (
        <div>
            <Row className='d-flex prod-detail'>
                <Col lg='4'>
                    <Image className='prod-image' src={prod.image} />
                </Col>
                <Col>
                    <h3>{prod.title}</h3>
                </Col>
            </Row>
        </div>
    )
}

export default ItemDetailComponent
