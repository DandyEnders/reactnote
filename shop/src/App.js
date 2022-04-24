import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button, Col, Row } from 'react-bootstrap';
import './App.css';
import Data from "./data.js";

import { Link, Route, Switch } from 'react-router-dom';
import Detail from './Detail';

function ItemList() {
  let [shoeData] = useState(Data);
  return (
    <Container>
      <Row>
        {
          shoeData.map((a) => {
            return Item(a)
          })
        }
      </Row>
    </Container>

  )
}

function Item(iData) {

  return (
    <Col>
      {/* ... src={ "http... image" + prop.i + ".jpg" } ... */}
      <img src={iData.img} width="100%" alt="product" />
      <h4>{iData.title}</h4>
      <p>{iData.content}</p>
      <p>&#8361;{iData.price.toLocaleString("en", { useGrouping: true })}</p>
    </Col>
  )
}

function App() {

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Jinho's Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link to="/">Home</Link></Nav.Link>
              <Nav.Link><Link to="/detail">Detail</Link></Nav.Link>
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
          <ItemList />
        </Route>
        <Route path="/detail" component={Detail}></Route>
        <Route path="/:id">
          <div>YEAH!</div>
        </Route>
      </Switch>

    </div>
  );
}


export default App;