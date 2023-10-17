import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from 'react-bootstrap';


function Food({food}) {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={food.imagem} />
        <Card.Body>
          <Card.Title>{food.nome}</Card.Title>
        </Card.Body>
      </Card>
    )
}

export default Food;