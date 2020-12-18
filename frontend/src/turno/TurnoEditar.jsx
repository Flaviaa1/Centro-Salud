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

class TurnoEditar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values, { setSubmitting }) {
    addTurno(values);
    setSubmitting(false);
    this.props.history.push('/turno');
  }

  render() {
    // const { a, b, c }  = this.state;

    const initialValues = {
   
      cuil:'', medico: '', fecha_inic: '', hora_inic:'',  dia:'', turno:'', estado_turno:''
    };

    return (
      <Fragment>
        < Navs></Navs>
         <Breadcrumb>
              <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
              <Breadcrumb.Item href="/turno">Turno</Breadcrumb.Item>
              <Breadcrumb.Item active>Editar Turno
              </Breadcrumb.Item>
            </Breadcrumb>

      <div className='container'>
      <h2 className="text-center mt-4">Editar Turno</h2> 

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
           <Form.Group as={Col} >
           <Form.Label>Estado Turno</Form.Label>
           <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                               <option selected disabled value="">Seleccionar Estado del Turno</option>
                                    <option value="cancelado">Cancelado</option>
                                    <option value="Atendido">Atendido</option>
                                    <option value="asignado">Asignado</option>
                                    <option value="presente">Presente</option>
                                </select>
           </Form.Group>
       </Form.Row>
     
      
       <Button type="submit" disabled={isSubmitting}>Actulizar</Button>
     </Form>
   )}
 </Formik>
      </div>
      </Fragment>
        );
  }
}

export default withRouter(TurnoEditar)

