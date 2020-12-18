import React, { Fragment } from 'react'
import './App.css'
import inicio from './imagenes/inicio.png';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Header from './navbar';

function Home() {
    return (
         <Fragment>
           <Header/>
               <Breadcrumb>
             
              <Breadcrumb.Item active>Inicio
              </Breadcrumb.Item>
            </Breadcrumb>
            <img src= {inicio} className= " mt-4 d-block w-100"/> 
         </Fragment>
          
      
        
    )
}

export default Home
