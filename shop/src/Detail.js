import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {withRouter} from 'react-router';
import Data from './data.js';
import styled from 'styled-components';

function Detail(props) {

  let { id } = useParams();
  let [shoes] = useState(Data);
  let history = useHistory();
  let product = shoes.find((item)=>{
    return item.id == id;
  });

  return <div className="container">
    <div className="row">
      <div className="col-md-6">
        <img src={"https://codingapple1.github.io/shop/shoes1.jpg"} width="100%" />
      </div>
      <div className="col-md-6 mt-4">
        <h4 className="pt-5">{product.title}</h4>
        <p>A{product.content}</p>
        <p>1{product.price}</p>
        <button className="btn btn-danger">Order now</button>
        <button className="btn btn-danger" onClick={()=>{
          history.goBack();
        }}>Back off</button>
      </div>
    </div>
  </div>;
}

export default withRouter(Detail)