import React from "react";
import { useContext } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import CartWidgetComponent from "./CartWidgetComponent";

function NabvarComponent() {

  const {categories} = useContext(ShopContext)

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Brand href="#home">Shopping City</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
              <NavDropdown title="Categorias">
              {categories.map(cat =>
                <NavDropdown.Item as={Link} to={`/categories/${cat.name}`}>{cat.name}</NavDropdown.Item>
                )}
              </NavDropdown>
              <Nav.Link href="#">Ofertas</Nav.Link>
              <CartWidgetComponent />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NabvarComponent;
