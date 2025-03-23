import React, { Component } from 'react';
import { Button, FormControl, Navbar, Container, Form, Nav} from 'react-bootstrap';
import logo from "./logo192.png";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from "../Pages/Home";
import About from '../Pages/About';
import Block from "../Pages/Block";
import Contacts from '../Pages/Contacts';



 export default class Header extends Component{
    render() {
        return (
        <>
        <Navbar sticky="top" collapseOnSelect expand="sm" bg="dark" variant='dark' >
<Container>
    
    <Navbar.Brand href="/" >
    <img
     src={logo} 
     height="30"
     width="30"
     className='d-inline-block align-top'
     alt="Logo"
     />
   React site </Navbar.Brand>
    <Navbar.Toggle aria controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href='/home'>home</Nav.Link>
            <Nav.Link href="/about">about us</Nav.Link>
            <Nav.Link href="/contacts">contacts</Nav.Link>
            <Nav.Link href="/block">block</Nav.Link>
        </Nav>
        < Form className='d-flex' style={ { position:"absolute", right:'10px' } } >
            <FormControl
            type="text"
            placeholder='Search'
            className='mr-sr-2'/>
            <Button variant="outline-info">Search</Button>
        </Form>
    </Navbar.Collapse>
</Container>
</Navbar>
<Router>
    <Routes>
        <Route  exact path="/home" element={<Home />} />
        <Route  exact path="/about" element={<About />} />
        <Route  exact path="/contacts" element={<Contacts />} />
        <Route  exact path="/block" element={<Block />} />
    </Routes>
</Router>
        </>)
    }
}

