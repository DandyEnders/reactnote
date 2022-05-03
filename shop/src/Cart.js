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
          {
            props.state.map((a, i) => {
              return (
                <tr key={i}>
                  <td>{a.id}</td>
                  <td>{a.name}</td>
                  <td>{a.quantity}</td>
                  <td><button onClick={() => { props.dispatch({ type: "increment", index: i }) }}>+</button>
                  <button onClick={() => { props.dispatch({ type: "decrement", index: i }) }}>-</button></td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>
  )
}

function callfunc(state) {
  return {
    state: state
  }
}
export default connect(callfunc)(Cart);
// export default Cart;