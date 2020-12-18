import React, { Fragment } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { withRouter } from 'react-router-dom';
import Navs from '../nav'

const EditarHistorial = () => {
    const editarHistorial = () => {

        alert('Se asctualizó el historial Correctamente!')
    }
    
    return (
        <Fragment>
            <Navs/>
              <Breadcrumb>
              <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
              <Breadcrumb.Item href="/historialclinico">Historial Clinico</Breadcrumb.Item>
              <Breadcrumb.Item active> Actualizar Historial
              </Breadcrumb.Item>
            </Breadcrumb>
            <div className= 'container'>
                <h2 className="text-center mt-4">Actualizar Historial Clinico</h2> 
                        <div className= "row justify-content-center">
                            <form className= "col-md-12 m-3">

                            <div className="form-row">
                                    <div className= "form-group col-md-6">
                                        <label>Numero de legajo</label>
                                        <input type='number' className="form-control"
                                        placeholder="Numero de legajo"></input>
                                    </div>
                                    <div className= "form-group col-md-6">
                                        <label>Paciente</label>
                                        <input type='text' className="form-control"
                                        placeholder="Ingrese el número de CUIL del Paciente"></input>
                                    </div>
                                
                                </div>
                        
                                <div className="form-row">
                                <div className= "form-group col-md-6">
                                        <label>Enfermedades</label>
                                        <input type='text' className="form-control"
                                        placeholder="Enfermedades"></input>
                                    </div>
                                    <div className= "form-group col-md-6">
                                        <label>Alergias</label>
                                        <input type='text' className="form-control"
                                        placeholder="Ingrese si tiene Alergias"></input>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className= "form-group col-md-4">
                                        <label>Fecha Creacion</label>
                                        <input type='text' className="form-control"
                                        placeholder="yyyy/mm/dd"></input>
                                    </div>
                                    <div className= "form-group col-md-4">
                                        <label>Medicamentos</label>
                                        <input type='text' className="form-control"
                                        placeholder="Hora Inicio"></input>
                                    </div>
                                    <div className= "form-group col-md-4">
                                        <label>Análisis</label>
                                        <input type='text' className="form-control"
                                        placeholder="Analisis"></input>
                                    
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className= "form-group col-md-12">
                                        <label>Reviciones</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                </div>


                                <button type="submit" className="btn btn-success float-right" onClick={editarHistorial}>Actualizar Historial Clinico</button>
                            </form>
                    </div> 

            </div>
        
     </Fragment>
    )
}

export default withRouter(EditarHistorial) 
