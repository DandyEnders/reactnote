import React from 'react';
import { useHistory } from 'react-router-dom';
import {withRouter} from 'react-router';

function Detail() {

  let history = useHistory();

  return <div className="container">
    <div className="row">
      <div className="col-md-6">
        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
      </div>
      <div className="col-md-6 mt-4">
        <h4 className="pt-5">Black and White</h4>
        <p>A great shoe!</p>
        <p>120,000 KRW</p>
        <button className="btn btn-danger">Order now</button>
        <button className="btn btn-danger" onClick={()=>{
          history.goBack();
        }}>Back off</button>
      </div>
    </div>
  </div>;
}

export default withRouter(Detail)