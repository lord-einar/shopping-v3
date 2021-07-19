import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import CarouselsComponent from "../component/CarouselsComponent";
import CategoriesComponent from "../component/CategoriesComponent";
import { ShopContext } from "../context/ShopContext";

function HomeContainer() {
  const { categories } = useContext(ShopContext);

  return (
    <>
      <CarouselsComponent />
      <div className="container">
        <div className="d-flex justify-content-around m-3">
          {categories.map((cat, idx) => (
            <Row>
              <Col>
                <CategoriesComponent key={idx} cat={cat} />
              </Col>
            </Row>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomeContainer;
