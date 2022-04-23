import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button, Col, Row } from 'react-bootstrap';
import './App.css';
import Data from "./data.js";

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
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
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
    </div>
  );
}

export default App;
