import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav';
import Navs from './nav'
import './App.css'

const Header = () => {
    return (
        <Fragment>
            
        <Navs></Navs>
        <Navbar bg="dark" variant="dark">
            <Nav className="justify-content-center mr-7">
            <Nav.Link href="/" className="navbar-brand text-ligh mr-4">Inicio</Nav.Link>
            <Nav.Link href="/medico" className="navbar-brand text-ligh mr-4">Médicos</Nav.Link>
            <Nav.Link href="/paciente" className="navbar-brand text-ligh mr-4">Pacientes</Nav.Link>
            <Nav.Link href="/turno" className="navbar-brand text-ligh mr-4">Turnos</Nav.Link>
            <Nav.Link href="/historialclinico" className="navbar-brand text-ligh mr-4">Historial Clínico</Nav.Link>
            </Nav>
           
        </Navbar>

            
        </Fragment>
        
       
    )
}

export default Header
