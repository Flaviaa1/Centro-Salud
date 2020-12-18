import React, { Fragment } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Formik, Form as FormikForm, Field } from "formik";
import Button from "react-bootstrap/Button";
import { addTurno } from "../ApiTurno";
import { withRouter } from "react-router-dom";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Navs from '../nav'
class NuevoTurno extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values, { setSubmitting }) {
    addTurno(values);
    setSubmitting(false);
    this.props.onNewTurno();
    this.props.history.push('/turno');
  }

  render() {
    // const { a, b, c }  = this.state;

    const initialValues = {
   
      cuil:'', medico: '', fecha_inic: '', hora_inic:'',  dia:'', turno:'', especialidad:'', estado_turno:'asignado'
    };

    return (
      <Fragment>
        <Navs></Navs>
         <Breadcrumb>
              <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
              <Breadcrumb.Item href="/turno">Turno</Breadcrumb.Item>
              <Breadcrumb.Item active>Nuevo Turno
              </Breadcrumb.Item>
            </Breadcrumb>

      <div className='container'>
      <h2 className="text-center mt-4">Nuevo Turno</h2> 

      <Formik initialValues={initialValues}
          onSubmit={this.onSubmit} >
          {({ isSubmitting }) => (
         <Form as={FormikForm}>
           <Form.Row>
           <Form.Group as={Col} >
           <Form.Label>Cuil</Form.Label>
           <Form.Control type="text" name='cuil' placeholder="Cuil" required as={Field} />
           </Form.Group>

           <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Medico</Form.Label>
              <Form.Control type="text" name='medico' placeholder="Nombre Medico" required as={Field} />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Especialidad</Form.Label>
              <Form.Control as="select" defaultValue="Especialidad">
                <option>Clínico</option>
                <option>Cardiólogo</option>
                <option>Pediatra</option>
              </Form.Control>
            </Form.Group>  
       </Form.Row>
       <Form.Row>
           <Form.Group as={Col} >
           <Form.Label>Fecha Inicio</Form.Label>
           <Form.Control type="text" name='fecha_inic' placeholder="yyyy-mm-dd" required as={Field} />
           </Form.Group>

           <Form.Group as={Col} >
           <Form.Label>Hora Inicio</Form.Label>
           <Form.Control type="text" name='hora_inic' placeholder="Hora" required as={Field} />
           
           </Form.Group>
           <Form.Group as={Col} >
           <Form.Label>Turno</Form.Label>
           <Form.Control type="text" name='turno' placeholder="Turno" required as={Field} />
           </Form.Group>
           
       </Form.Row>
       <Form.Row>
           
           <Form.Group as={Col} >
           <Form.Label>Dia</Form.Label>
           <Form.Control type="text" name='dia' placeholder="Dia" required as={Field} />
           </Form.Group>
          
       </Form.Row>
     
      
       <Button type="submit" disabled={isSubmitting}>Guardar</Button>
     </Form>
   )}
 </Formik>
      </div>
      </Fragment>
        );
  }
}

export default withRouter( NuevoTurno)

{/* <div className='container'>
                    <h2 className="text-center mt-4">Nuevo Turno</h2> 
               <div className= "row justify-content-center">
                   <form className= "col-md-12 m-3">
                
                       <div className="form-row">
                           <div className= "form-group col-md-6">
                               <label>Paciente</label>
                               <input type='text' className="form-control"
                               placeholder="Ingrese el número de CUIL del Paciente"></input>
                           </div>
                           <div className= "form-group col-md-6">
                               <label>Medico</label>
                               <select class="custom-select">
                                    <option selected>Elija un Medico</option>
                                    <option value="1">Lucas Paz</option>
                                    <option value="2">Santiago Gimenez</option>
                                    <option value="3">Fernando Lucero</option>
                                    <option value="3">Yesica Mendieta</option>
                                    <option value="3">Maria Gutierrez</option>
                                </select>
                           </div>
                       </div>
                       <div className="form-row">
                           <div className= "form-group col-md-4">
                               <label>Fecha</label>
                               <input type='text' className="form-control"
                               placeholder="yyyy/mm/dd"></input>
                           </div>
                           <div className= "form-group col-md-4">
                               <label>Hora inicio</label>
                               <input type='text' className="form-control"
                               placeholder="Hora Inicio"></input>
                           </div>
                           <div className= "form-group col-md-4">
                               <label>Turno</label>
                               <select class="custom-select">
                               <option selected>Elija un turno</option>
                                    <option value="1">Mañana</option>
                                    <option value="2">Tarde</option>
                               </select>
                              
                           </div>
                       </div>
                       <div className="form-row">
                           <div className= "form-group col-md-6">
                               <label>Dia</label>
                               <input type='text' className="form-control"
                               placeholder="Dia"></input>
                           </div>
                           <div className= "form-group col-md-6">
                               <label>Estado Turno</label>
                               <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                               <option selected disabled value="">Seleccionar Estado del Turno</option>
                                    <option value="cancelado">Cancelado</option>
                                    <option value="Atendido">Atendido</option>
                                    <option value="asignado">Asignado</option>
                                    <option value="presente">Presente</option>
                                </select>
                           </div>
                          
                       </div>

                       <button type="submit" className="btn btn-success float-right" onClick={NuevoTurno}>Nuevo Turno</button>
                   </form>
              </div> 
                </div> */}