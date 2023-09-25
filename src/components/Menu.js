import React, { Component} from "react"
import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartProvider } from "react-use-cart";


import './Menu.css'

const image = require.context('../images',true);

class Menu extends Component{


    render(){


        return(
       
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>       
            <Navbar.Brand href="#home">
              <Link to='/' className="navbar-logo">
                <img src={image('./iniciopag.png')} 
                alt={image}
                class="u-image u-image-default u-image-1" 
                data-image-width="20" 
                data-image-height="10"/>
              </Link>
            </Navbar.Brand>
              

            
          <Navbar.Toggle aria-controls="basic-navbar-nav" justify="end"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto" >
                <Link className="nav-link active" href="#" to='/PageInicio' >Inicio</Link> 
                <Link className="nav-link" href="#" to='/Servicios' >Areas de Experiencia</Link>
                <CartProvider>   
                <Link className="nav-link" href="#" to='/Consulta'>Contratar Servicios</Link>
                </CartProvider>
                <Link className="nav-link" href="#" to='/Casos'>Nuestros clientes</Link> 
                <Link className="nav-link" href="#" to='/Somos'>Quienes somos</Link> 
                <Link className="nav-link" href="#" to='/Contacto'>Contactanos</Link> 
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    

      )   
    }
}


export default Menu