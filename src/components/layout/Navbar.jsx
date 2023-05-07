import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
//import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';
//import { react } from 'https://fontawesome.com/icons/react?f=brands&s=solid&an=spin'


function NavBar() {
    return(
        <>
            <Navbar bg="dark" variant="dark">
                
                <Navbar.Brand>Trabalho1</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/galeria">Galeria</Nav.Link>
                    <Nav.Link href="/lista">Lista</Nav.Link>
                    <Nav.Link href="/carro">Carro</Nav.Link>
                    <Nav.Link href="/listaapi">Lista API</Nav.Link>
                </Nav>
            </Navbar>      
        </>
      
    )
}

export default NavBar