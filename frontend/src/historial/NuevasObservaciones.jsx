import Breadcrumb from 'react-bootstrap/Breadcrumb';

import React, { Fragment, Component } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Formik, Form as FormikForm, Field } from "formik";
import Button from "react-bootstrap/Button";
import { addObservacion } from "../ApiObservaciones";
import { withRouter} from "react-router-dom";
import Navs from '../nav'

class NuevasObservaciones extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    
    
        this.onSubmit = this.onSubmit.bind(this);
      }
    
    
    onSubmit(values, { setSubmitting }) {
        addObservacion(values);
        setSubmitting(false); 
        this.props.history.push('/historialclinico');
        
      }
    render() {
        const initialValues = {
            medico: '', clinica:'', observacion:'', fecha:'', diagnostico:'', medicamentos:'', receta:''
          }; 
        return (
            <Fragment>
            <Navs></Navs>
             <Breadcrumb>
             <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
             <Breadcrumb.Item href="/historialclinico">Historial Clinico</Breadcrumb.Item>
             <Breadcrumb.Item active> Nueva Obervación
             </Breadcrumb.Item>
           </Breadcrumb>
          <div className='container'>
          <h2 className="text-center mt-4">Nueva Observación</h2> 
         <Formik initialValues={initialValues}
             onSubmit={this.onSubmit} >
       {({ isSubmitting }) => (
         <Form as={FormikForm}>
          <Form.Row>
               <Form.Group as={Col} >
               <Form.Label>Médico </Form.Label>
               <Form.Control type="text" name='medico' placeholder="Nombre y Apellido" required as={Field} />
               </Form.Group>

               <Form.Group as={Col} >
               <Form.Label>Clínica</Form.Label>
               <Form.Control type="text" name='clinica' placeholder="Nombre Clínica" required as={Field} />
               </Form.Group>


           </Form.Row>
           <Form.Group as={Row}>
              <Form.Label >
                Observaciones
              </Form.Label>
              <Col sm="10" lg="12">
                <Form.Control name="observacion" component="textarea" rows="10" as={Field} />
              </Col>
            </Form.Group>
           <Form.Row>
               <Form.Group as={Col} >
               <Form.Label>Diagnostico</Form.Label>
               <Form.Control type="text" name='diagnostico' placeholder="Diagnostico" required as={Field} />
               </Form.Group>

               <Form.Group as={Col} >
               <Form.Label>Medicamento</Form.Label>
               <Form.Control type="text" name='medicamentos' placeholder="Medicamento" required as={Field} />
               </Form.Group>
           </Form.Row>
           <Form.Group as={Row}>
              <Form.Label >
                Receta Medica
              </Form.Label>
              <Col sm="10" lg="12">
                <Form.Control name="receta" component="textarea" rows="10" as={Field} />
              </Col>
            </Form.Group>
          
           <Button type="submit" disabled={isSubmitting}>Guardar</Button>
         </Form>
       )}
     </Formik>
       </div>
          </Fragment>
        );
    }
}

export default withRouter(NuevasObservaciones);

