import React, {Component,Fragment } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { withRouter, useHistory } from "react-router-dom";
import Navs from '../nav'

const EliminarPaciente = () => {

    const history = useHistory();
    

    const eliminarPaciente = () => {

        alert('Desea Eliminar?')
        history.push('/paciente')
    } 
    return (
        <Fragment>
            <Navs></Navs>
        <Breadcrumb>
             <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
             <Breadcrumb.Item href="/paciente">Paciente</Breadcrumb.Item>
             <Breadcrumb.Item active>Baja Paciente
             </Breadcrumb.Item>
           </Breadcrumb>

            <div className= 'container'>
            <h2 className="text-center mt-4">Baja Paciente</h2> 
             <form>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Seleccione Paciente</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>Florencia Rodriguez</option>
                        <option>Carlos Peralta</option>
                        <option>Andrea Cabrera</option>
                        <option>Soledad Gauna</option>
                        <option>Micaela Mellado</option>
                    </select>
                    </div>
                    <button onClick={eliminarPaciente} className="btn btn-primary mt-5">Baja Paciente</button>
                </form>
            </div>
                

        </Fragment>
    )
}

export default withRouter(EliminarPaciente)
