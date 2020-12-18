import React, { Fragment } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import "./medicoList.css";
import moment from "moment";
import Header from '../navbar'
import { Link, withRouter } from "react-router-dom";
import MedicoFilter from './MedicoFilter';

function MedicoList(props) {
  console.log(props.pacientes);
  return (
    <Fragment>
      <Header/> 
      
       
       <ul class="nav nav-tabs"> 
          
          <li class="nav-item">
            <a class="nav-link" href="/medico/nuevo">Alta Medico</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/medico/editar">Modificar Medico</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="/medico/eliminar">Baja Medico</a>
          </li>
        </ul>
        <Breadcrumb>
              <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
              <Breadcrumb.Item active>Medico
              </Breadcrumb.Item>
            </Breadcrumb>

    
      
        <div className='container'>
      <h2 className="text-center mt-4">Lista Medico</h2>  
      <ListGroup className="issue-list mt-4">
       <MedicoFilter></MedicoFilter>
      { props.medicos && props.medicos.map(i => {
        
        return (
  
         
          
              <ListGroup.Item key={i.id}>
                
                  <h5><Link to={`${props.match.url}/${i.id}`}>{i.nombre} {i.apellido}</Link></h5> 




                  <div className="issue-subheader">
                    #{i.id} {i.estado === "activo" ? "activo" : "suspendido"} {moment.unix(i.estado === "open" ? i.fecha : i.modificado).fromNow()}
                  </div>
                  
                </ListGroup.Item>

             
             

                
            

            
   
            
            
       

        );
      })}
      
    </ListGroup>
    </div>
   
    </Fragment>
    
  );
}

export default withRouter(MedicoList);
