import Food from './Food';
import { Button } from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const foods =[ 
    {
      id: 1,
      nome: "Hambúrguer",
      imagem: "./imgs/hamburguer.jpg",
    }, 
    {
      id: 2,
      nome: 'Suco',
      imagem: './imgs/suco.jpg',
    },
    {
      id: 3,
      nome: 'Milk Shake',
      imagem: './imgs/milk_shake.jpg',
    },
    {
      id: 3,
      nome: 'Sanduíche',
      imagem: './imgs/sanduiche.jpg'
    }
  ]
  


  return (
    <div className="container">
    <h1 className="my-5 text-center">Menu</h1>
    <div className="text-right mb-3">
      <Button variant="primary">+</Button>
    </div>
    <div className="row">
      {foods.map((food) => (
        <div key={food.id} className="col-md-3 mb-4">
          <Food food={food} nome={food.nome} />
        </div>
      ))}
    </div>
  </div>
  );
}

export default App
