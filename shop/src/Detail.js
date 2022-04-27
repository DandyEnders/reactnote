import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {withRouter} from 'react-router';
import Data from './data.js';
import styled from 'styled-components';

let Box = styled.div`
  padding : 20px;
`;

let Title = styled.h4`
  font-size : 25px;
  color : ${ props => props.color}
`;



function Detail(props) {
  useEffect(() => {
    console.log(111);
      // let timer = setTimeout(()=>{console.log(12321)}, 2000)
      let timer = setTimeout(()=>{
        setAlert(false);
      }, 3000);
    return () => {
      clearTimeout(timer);
    }
  }, []);

  let [alert, setAlert] = useState(true);
  let [inputData, setInputData] = useState("");
  
  let { id } = useParams();
  let [shoes] = useState(Data);
  let history = useHistory();
  let product = shoes.find((item)=>{
    return item.id == id;
  });
  

  return <div className="container">
    <Box><Title className="red" color={''}>Detail</Title></Box>
    <div>
      {
        alert === true 
        ? <div>Stock is low!</div>
        : null
      }
      {inputData}
      <input onChange={(e)=>{
        setInputData(e.target.value);
      }} />

      <div className="col-md-6">
        <img src={"https://codingapple1.github.io/shop/shoes1.jpg"} width="100%" />
      </div>
      <div className="col-md-6 mt-4">
        <h4 className="pt-5">{product.title}</h4>
        <p>{product.content}</p>
        <p>{product.price}</p>
        <Info inventory={props.inventory}></Info>
        <button className="btn btn-danger" onClick={()=>{let temp = [...props.inventory]; temp[0] = temp[0] - 1; props.setInventory(temp)}}>Order now</button>
        <button className="btn btn-danger" onClick={()=>{
          history.goBack();
        }}>Back off</button>
      </div>
    </div>
  </div>;
}

function Info(props){
  return (
    <p>Inventory: {props.inventory[0]}</p>
  )
}

export default withRouter(Detail)