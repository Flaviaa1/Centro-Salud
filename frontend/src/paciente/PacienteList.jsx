import React, { Fragment } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import "../medico/medicoList.css";
import moment from "moment";
import Header from '../navbar'
import { Link, withRouter } from "react-router-dom";
import PacienteFilter from './PacienteFilter'

function PacienteList(props) {
  console.log(props.pacientes);
        
  return (
    <Fragment>
      <Header/>
      <ul class="nav nav-tabs">
          
          <li class="nav-item">
            <a class="nav-link" href="/paciente/nuevo">Alta Paciente</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/paciente/editar">Modificar Paciente</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="/paciente/eliminar">Baja Paciente</a>
          </li>
        </ul>
        <Breadcrumb>
              <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
              <Breadcrumb.Item active>Paciente
              </Breadcrumb.Item>
            </Breadcrumb>

      <div className='container'>
      <h2 className="text-center mt-4">Lista Paciente</h2> 

      <PacienteFilter></PacienteFilter>
      <ListGroup className="issue-list mt-4">
       
      { props.pacientes && props.pacientes.map(i => {
        
        return (
    
       
              
              <ListGroup.Item key={i.id}>
                
                  <h5><Link to={`${props.match.url}/${i.id}`}>{i.nombre} {i.apellido}</Link></h5> 




                  <div className="issue-subheader">
                    #{i.id} {i.estado === "activo" ? "activo" : "suspendido"} {moment.unix(i.estado === "activo" ? i.fecha : i.modificado).fromNow()} 
                  </div>
                  
                </ListGroup.Item>

             
            
            
       

        );
      })}
      
    </ListGroup>
    </div>
   
    </Fragment>
    
  );
}

export default withRouter(PacienteList);