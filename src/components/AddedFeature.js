import React, {useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { removeFeature } from '../Actions/carActions';

//UseSelector reducer ayuu  Data kasoo Jiidanayaa
//UseDispatch wax ayaan ugu diraynaa ama kasoo jiidanaynaa Action


const AddedFeature = props => {

  const carFeatures = useSelector((state) => state.carReducer.additionalFeatures)
  

  return (
    carFeatures.map(oneFeature => (
    
      <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={removeFeature}>X</button>
      {oneFeature.name}
    </li>
    ))
   
  );
};

export default AddedFeature;
