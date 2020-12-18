import React, { Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
import { get, close, reopen } from "../ApiHistorial";
import "../medico/medicoDetail.css";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import moment from "moment";
import Navs from "../nav"
import Nav from 'react-bootstrap/Nav'


class HistorialDetail extends React.Component {

  constructor(props) {
    super(props)
    this.state = {};
  }

  componentDidMount() {
    this.loadHistorial();
  }

  loadHistorial() {
    const id = Number(this.props.match.params.historialId);
    const historial = get(id);
    console.log(id);
    this.setState({ historial});
  }

  onCerrar() {
    const { historial } = this.state;
    close(historial.id);
    this.loadHistorial();
  }

  onReabrir() {
    reopen(this.state.historial.id);
    this.loadHistorial();
  }

  render() {

    const { historial } = this.state;
     console.log('historial',historial);
     
    return (

      <Fragment> 
        <Navs></Navs>
        <Nav variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/historialclinico/observaciones">Observaciones</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/historialclinico/nuevaobservacion">Nueva Obervacion</Nav.Link>
          </Nav.Item>
         
        </Nav> 
              <Breadcrumb>
              <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
              <Breadcrumb.Item href="/historialclinico">Historial Clinico</Breadcrumb.Item>
              <Breadcrumb.Item active> Información Paciente
              </Breadcrumb.Item>
            </Breadcrumb>
        <div className='container'>
        <h2 className="text-center mt-4">Información Paciente</h2> 
            <div className= 'row'>

                        <div className=" mt-5 col-8">  
                    {historial &&
                        <div> 
                          
                          <h4> <span className="id">{`#${historial.id}`}</span>  {historial.paciente} </h4>

                          <span className="fecha mt-5"> historial Registrado {moment.unix(historial.fecha).fromNow()}</span>
                          <div className="d-flex justify-content-between mt-5">
                             <h6> Peso: {historial.peso} kg</h6>
                            <h6> Altura: {historial.altura} cm</h6>
                            <h6> Medicamentos: {historial.medicamentos}</h6>
                         </div>
                         
                         <div className="d-flex justify-content-between mt-5">
                         <h6> Análisis: {historial.analisis}</h6>
                            <h6>Tratamientos: {historial.tratamientos}</h6>
                            <h6>Operaciones: {historial.operaciones}</h6>
                         </div>
                         
                            
                          </div>
                        
                      }
              
                    </div>
                    </div>
        </div>
           
      </Fragment>
    
    
    
    );
  }

}

export default withRouter(HistorialDetail)