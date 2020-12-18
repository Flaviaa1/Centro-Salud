import React from 'react'
import Button from "react-bootstrap/Button";
import { Link, withRouter } from "react-router-dom";

const TurnoTable = ({ turno}) => {

  const eliminarTurno = ()=>{

 alert('Desea eliminar turno');
  }
  
    return (
        
           <tr>
               <td>{turno.id}</td>
                <td>{turno.cuil}</td>
                <td>{turno.dia}</td>
                <td>{turno.fecha_inic}</td>
                <td>{turno.hora_inic}</td>
                <td>{turno.turno}</td>
                <td>{turno.estado}</td> 
                <td>{turno.medico}</td> 
               
                <td>
                <Link to={`turno/editar`}>
                  <Button variant="success">Editar</Button>
                </Link>
                </td> 
                <td>
                <Link to={`turno/${turno.id}`}>{turno.nombre} {turno.apellido}
                  <Button variant="danger">Cancelar</Button>
                </Link>
                </td> 
           </tr>
                 
            

        
    )
}

export default withRouter(TurnoTable)
