import React, { Fragment } from "react";

import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link, withRouter } from "react-router-dom";
import TurnoTable from './TurnoTable';
import Header from '../navbar';
import TurnoFilter from './TurnoFilter'


function TurnoList(props) {
  console.log(props.turnos);
        
  return (
    <Fragment>
        <Header/>
       
        <Breadcrumb>
              <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
              <Breadcrumb.Item active>Turno
              </Breadcrumb.Item>
            </Breadcrumb>

      <div className='container'>
      <h2 className="text-center mt-4">Lista Turno</h2> 

    <TurnoFilter></TurnoFilter>
  
     
    
       <table className="table mt-4">
            <thead className='thead-dark'>
                <tr>
                <th>#</th>
                <th>Cuil</th>
                <th>Dia</th>
                <th>Fecha Inico</th>
                <th>Hora Inicio</th>
                <th>Turno</th>
                <th>Estado del Turno</th>
                <th>Medico</th> 
                <th>Editar</th>  
                <th>Cancelar</th>         
                </tr>
            </thead>
            <tbody>
            {props.turnos.map( turno => (
                        <TurnoTable
                          key= {turno.id}
                          turno= {turno}
                          
                        />
                    ))}
            </tbody>
        </table>
    </div>
   
    </Fragment>
    
  );
}

export default  withRouter(TurnoList);

