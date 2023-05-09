import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaReact } from 'react-icons/fa'

function NavBar() {
    return(
        <>
            <Navbar bg="dark" variant="dark" expand="md">
                <Navbar.Brand><FaReact size="2em" className='me-2'/>Trabalho1</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/galeria">Galeria</Nav.Link>
                    <Nav.Link href="/listafrutas">Lista Frutas</Nav.Link>
                    <Nav.Link href="/carro">Carro</Nav.Link>
                    <Nav.Link href="/listaapi">Lista API</Nav.Link>
                </Nav>
            </Navbar>      
        </>
      
    )
}

export default NavBar