import React from "react";
import { useContext } from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

function ItemListComponent() {
  const { productos } = useContext(ShopContext);

  return (
    <>
      <Row className='d-flex flex-wrap'>
          {productos.map( prod => {
              return (
                <Col lg={6} className='d-flex shadow p-3 mb-5 bg-white rounded'>
                    <div className='produc-list-img'>
                        <Image src={prod.image} />
                    </div>
                    <div className='produc-list-text'>
                        <h4>{prod.title}</h4>
                        <Button as={Link} to={`/productDetail/${prod.id}`}>Ver detalle</Button>
                    </div>
                </Col>
          )})
          }
      </Row>
    </>
  );
}

export default ItemListComponent;
