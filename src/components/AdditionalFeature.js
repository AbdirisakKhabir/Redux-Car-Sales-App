import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addNewCar } from '../Actions/carActions';

//UseSelector reducer ayuu  Data kasoo Jiidanayaa
//UseDispatch wax ayaan ugu diraynaa ama kasoo jiidanaynaa Action


const AdditionalFeature = () => {

  const [newFeatures, setNewFeatures] = useState({
    // id:carData.id,
    // name:carData.name,
    // price:carData.price
  })

  const carFeatures = useSelector((state) => state.carReducer.additionalFeatures)
  // const carData = useSelector((state) => state.carReducer.car)


  // console.log("carData",carData.name)


  return (
    carFeatures.map(oneFeature => (
      <li>
      {/* Add an onClick that will let you add a feature to your car */}
      
      <button className="button" onClick={addNewCar(carFeatures.feature)}>Add</button>

      {oneFeature.name} 
     {oneFeature.price} 
    </li>
      ))
   
  );
};

export default AdditionalFeature;
