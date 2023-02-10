import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardOfSuppliers({elt}) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={elt.logo}/>
      <Card.Body>
        <Card.Title>{elt.name}</Card.Title>
        <Card.Text>
        <div>ADRESS: {elt.address}</div><div>PHONE: {elt.phone}</div>
          
        </Card.Text>
        <Button variant="primary">SEE SUPPLIER'S PRODUCTS</Button>
      </Card.Body>
    </Card>
  );
}

export default CardOfSuppliers;
