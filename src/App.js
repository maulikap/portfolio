import Home from './Home';
import {  Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  Link } from "react-router-dom";
import Qualifications from './Qualifications';
import WorkDetails from './WorkDetails';
import "./App.css";

function App() {
  return (
    <>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Maulik Parmar</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="">
                <Nav.Link  > <Link to="/">Home</Link> </Nav.Link>
                <Nav.Link  > <Link to="/Qualifications">Qualifications</Link> </Nav.Link>
                <Nav.Link  > <Link to="/WorkDetails">Work Details</Link> </Nav.Link>
                
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Qualifications" element={<Qualifications />} />
        <Route path="/WorkDetails" element={<WorkDetails />} />
       
      </Routes>
    
    </>
  );
}

export default App;
