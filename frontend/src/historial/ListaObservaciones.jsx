import React, {Fragment} from 'react'
import {  withRouter } from "react-router-dom";
import Navs from '../nav';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ReactMarkdown from "react-markdown";
import Card from "react-bootstrap/Card";

const ListaObservaciones = ({historial}) => {
 

    return (
          <Fragment>
              <Navs></Navs>
              <Breadcrumb>
              <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
              <Breadcrumb.Item href="/historialclinico">Historial Clinico</Breadcrumb.Item>
              <Breadcrumb.Item href="/historialclinico/1 ">Carina Martinez</Breadcrumb.Item>
              <Breadcrumb.Item active>Observaciones
              </Breadcrumb.Item>
            </Breadcrumb>
              <div className= 'container mt-5'>
              <h6 class="card-title text-center">OBSERVACIONES</h6>
                  <div class="card  border-secondary">
        
                    <div class="card-body">
                    
                    <div class="d-flex justify-content-between ">
                          
                    </div>
                         
                         <div class="d-flex justify-content-between mt-3">
                         <h6> Medico: Flavia Carolina Gregorio </h6>
                            <h6> Clinica: NIDO </h6> 
                            <h6> Fecha: 20 DE MARZO 2020 </h6>
                         </div>
                         
                         <div className="contenido">
                         <h6>Revisacion </h6>

                          <Card>
                            <Card.Body>
                              <ReactMarkdown >
                                hola como estas?
                              </ReactMarkdown>
                            </Card.Body>
                          </Card>
                        </div>
                        <div class="d-flex justify-content-between mt-3">
                         <h6> Diagnostico: Catarro</h6>
                           
                         </div> 
                          </div>
                          <div class="card-body">
                    <h6 class="card-title text-center">RECETA</h6>
                    <div class="d-flex justify-content-between mt-5">
                    <h6>Medicamento: paracetamol</h6>
                         </div>
                         
                         <div className="contenido">
                         <h6> Receta</h6>
                          <Card>
                            <Card.Body>
                              <ReactMarkdown >
                                hola como estas?
                              </ReactMarkdown>
                            </Card.Body>
                          </Card>
                        </div>
                         
                            
                          </div>
                    
                
                    </div>
                    <div class="card  border-secondary mt-4">
        
                    <div class="card-body">
                    
                    <div class="d-flex justify-content-between ">
                          
                    </div>
                         
                         <div class="d-flex justify-content-between mt-3">
                         <h6> Medico: Flavia Carolina Gregorio </h6>
                            <h6> Clinica: NIDO </h6> 
                            <h6> Fecha: 20 DE MARZO 2020 </h6>
                         </div>
                         
                         <div className="contenido">
                         <h6>Revisacion </h6>

                          <Card>
                            <Card.Body>
                              <ReactMarkdown >
                                hola como estas?
                              </ReactMarkdown>
                            </Card.Body>
                          </Card>
                        </div>
                        <div class="d-flex justify-content-between mt-3">
                         <h6> Diagnostico: Catarro</h6>
                           
                         </div> 
                          </div>
                          <div class="card-body">
                    <h6 class="card-title text-center">RECETA</h6>
                    <div class="d-flex justify-content-between mt-5">
                    <h6>Medicamento: paracetamol</h6>
                         </div>
                         
                         <div className="contenido">
                         <h6> Receta</h6>
                          <Card>
                            <Card.Body>
                              <ReactMarkdown >
                                hola como estas?
                              </ReactMarkdown>
                            </Card.Body>
                          </Card>
                        </div>
                         
                            
                          </div>
                    
                
                    </div>
                    
                    
                    </div>
               
          </Fragment>
                
       

    )
}

export default withRouter(ListaObservaciones)
 
        //    <div class="card ">
                
        //         <div class="card-body" >
        //         <h6 className="text-center">OBSERVACIONES</h6>
        //         </div>
        //       </div>
        