import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function CardOfProducts({ elt }) {
  return (
    <Row xs={1} md={4} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card border="light" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={elt.image} style={{borderImage:"10px"}} />
            <Card.Body>
              <Card.Title style={{ textAlign: "left" }}>Supplier</Card.Title>
              <Card.Text style={{ textAlign: "left" }}>
              {elt.name}
              </Card.Text>
              <div>
                <Button style={{ backgroundColor: "#698269", width: "100%" }}>
                  DOWNLOAD 3D{" "}
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default CardOfProducts;
