import React, { Fragment } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Header from "../navbar"
import "../medico/medicoList.css";
import moment from "moment";
import { Link, withRouter } from "react-router-dom";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import HistorialFilter from "./HistorialFilter";

function ListHistorial(props) {
  return (
   
    <Fragment> 
      <Header/>
        <ul class="nav nav-tabs">
          
          <li class="nav-item">
            <a class="nav-link" href="/historialclinico/nuevo">Crear Historial</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/historialclinico/actualizar">Actualizar Historial</a>
          </li>
        </ul>
       <Breadcrumb>
              <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
              <Breadcrumb.Item active>Historial Clinico
              </Breadcrumb.Item>
            </Breadcrumb>

      <div className='container'>
      <h2 className="text-center mt-4">Lista de Historiales Clinicos</h2> 
      <HistorialFilter></HistorialFilter>
      <ListGroup className="issue-list mt-4">

      { props.historiales && props.historiales.map(i => {
        
        return (
  
          
              <ListGroup.Item key={i.id}>
                
                  <h5><Link to={`${props.match.url}/${i.id}`}>{i.paciente}</Link></h5>


                  <div className="issue-subheader">
                    #{i.id} {i.estado === "open" ? "abierto" : "cerrado"} {moment.unix(i.estado === "open" ? i.fecha : i.modificado).fromNow()} por {i.usuario}
                  </div>
                  
                </ListGroup.Item>

         
               
            
            
       

        );
      })}
      
    </ListGroup>
      </div>
       
   
    </Fragment>
    
  );
}

export default withRouter(ListHistorial);