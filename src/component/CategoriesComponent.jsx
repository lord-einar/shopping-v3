import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CategoriesComponent.css";

function CategoriesComponent({ cat }) {
  return (
    <>
      <Card style={{ width: "12rem" }}>
        <Card.Img variant="top" src={cat.image} />
        <Card.Body>
          <Card.Title>{cat.name}</Card.Title>
          <Button as={Link} to={`/categories/${cat.name}`} variant="primary">Explorar</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default CategoriesComponent;
