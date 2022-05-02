import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

function Cart(props) {
  return (
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Count</th>
            <th>Modify</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{ props.state[0].name }</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

function callfunc(state){
  return {
    state: state
  }
}
export default connect(callfunc)(Cart);
// export default Cart;