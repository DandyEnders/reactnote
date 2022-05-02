import React, { useState, useContext } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button, Col, Row } from 'react-bootstrap';
import './App.css';
import Data from "./data.js";
import axios from 'axios';
import Cart from "./Cart.js";

import { Link, Route, Switch } from 'react-router-dom';
import Detail from './Detail';

let inventoryContext = React.createContext();

function ItemList() {
  let [shoeData, setShoeData] = useState(Data);
  return (
    <Container>
      <Row>
        {
          shoeData.map((a, i) => {
            return Item(a, i)
          })
        }
      </Row>
      <button className="btn btn-primary" onClick={() => {
        axios.post("url", { id: "abc" })
        axios.get("https://codingapple1.github.io/shop/data2.json")
          .then((e) => {
            setShoeData([...shoeData, ...e.data])
          }).catch(() => {
            console.log("Failed...")
          });
      }}>More...</button>
    </Container>

  )
}

function Item(iData, i) {
  let inventory = useContext(inventoryContext);
  return (
    <Col>
      {/* ... src={ "http... image" + prop.i + ".jpg" } ... */}
      <img src={"https://codingapple1.github.io/shop/shoes" + (i + 1) + ".jpg"} width="100%" alt="product" />
      <h4>{iData.title}</h4>
      <p>{iData.content}</p>
      <p>&#8361;{iData.price.toLocaleString("en", { useGrouping: true })}</p>
      <p>{inventory}</p>
    </Col>
  )
}

function App() {

  let [inventory, setInventory] = useState([5, 6, 7])

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Jinho's Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Unworking Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another Unworking Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Why are you keep looking at these</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">All alone link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>
        <Route exact path="/">
          <div className="background">
            <div><h1>20% Season off</h1>
              <p>
                Welcome to my shop!
              </p>
              <p>
                <Button variant="primary">Learn more</Button>{' '}
              </p>
            </div>
          </div>
          <inventoryContext.Provider value={inventory}>
            <ItemList />
          </inventoryContext.Provider>

        </Route>
        <Route path="/detail/:id">
          <inventoryContext.Provider value={inventory}>
            <Detail inventory={inventory} setInventory={setInventory}></Detail>
          </inventoryContext.Provider>
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
        <Route path="/:id">
          <div>YEAH!</div>
        </Route>
      </Switch>

    </div>
  );
}


export default App;