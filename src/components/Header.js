import React, {useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addNewCar } from '../Actions/carActions';

//UseSelector reducer ayuu  Data kasoo Jiidanayaa
//UseDispatch wax ayaan ugu diraynaa ama kasoo jiidanaynaa Action
const Header = () => {
  

  const carData = useSelector((state) => state.carReducer.car)

  console.log("Maanta",carData)

  return (
    <>
      <figure className="image is-128x128">
        <img src={carData.image} alt={carData.name} />
      </figure>
      <h2>{carData.name}</h2>
      <p>Amount: ${carData.price}</p>
    </>
  );
};

export default Header;
