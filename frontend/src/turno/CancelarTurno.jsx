
import React, { Fragment, Component } from 'react'
import { withRouter, Link } from "react-router-dom";
import { get, close, reopen } from "../ApiTurno";
import "../medico/medicoDetail.css";
import Badge from "react-bootstrap/Badge";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from "react-bootstrap/Button";
import moment from "moment";


 class CancelarTurno extends Component {
    constructor(props) {
        super(props)
        this.state = {};
      }
    
      componentDidMount() {
        this.loadTurno();
      }
    
      loadTurno() {
        const id = Number(this.props.match.params.turnoId);
        const turno = get(id);
        console.log(id);
        this.setState({ turno});
      }
    
      onSuspender() {
        const { turno } = this.state;
        close(turno.id);
        this.loadTurno();
      }
    
      onActivar() {
        reopen(this.state.turno.id);
        this.loadTurno();
      }
    
      render() {
    
        const { turno } = this.state;
        console.log('ciente',turno);
        return (
          <Fragment>
             <Breadcrumb>
                  <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
                  <Breadcrumb.Item href="/turno">turno</Breadcrumb.Item>
                  <Breadcrumb.Item active>Cancelar Turno
                  </Breadcrumb.Item>
                </Breadcrumb>
    
          <div className='container'>
          <h2 className="text-center mt-4">Cancelar Turno</h2> 
             
          
            
          {turno &&
            <div className='row'> 
             <div className='col-8'>
                   <h3>{turno.cuil}  <span className="id">{`#${turno.id}`}</span></h3>
                  {turno.estado === 'asignado' && <Badge variant="success">Asignado</Badge>}
                  {turno.estado === 'cancelado' && <Badge variant="danger">Cancelado</Badge>}
                  <span className="usuario"><h4></h4></span>
                  <span className="fecha"> turno Registrado {moment.unix(turno.fecha).fromNow()}</span>
             </div>
              
              <div className='col-2'>
                     {turno.estado === 'cancelado' &&
                        <div className="estado">
                          <Button onClick={this.onActivar.bind(this)}>Activar</Button>
              
                        </div>
                      }
                      {turno.estado === 'asignado' &&
                        <div className="estado">
                          <Button onClick={this.onSuspender.bind(this)}>Cancelar</Button>
                          
                        </div>
                      }
              </div>
              
             
            </div>
          }
          
        
        </div>
        
          </Fragment>
        )
    }
}


export  default withRouter(CancelarTurno)