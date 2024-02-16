import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard(props) {
  return (
    
    <Card >
    <div className="saleLabel"  style={{ display: props.status === "sale" ? "inline" : "none" }}><div>Sale</div></div>
    <Card.Img variant="top" className="cardImg" src={"/static/" + props.title + ".jpg"} loading="lazy"/>
    <Card.Body className="card-body">
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
        {props.text}
      </Card.Text>
      <Button variant="dark" onClick={props.addProducts}><h6>Buy {props.price}$</h6></Button>
    </Card.Body>
  </Card>
  );
}

export default ProductCard;
