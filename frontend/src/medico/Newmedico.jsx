import React, { Fragment } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Formik, Form as FormikForm, Field } from "formik";
import Button from "react-bootstrap/Button";
import { addMedico } from "../ApiMedico";
import { withRouter } from "react-router-dom";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Navs from '../nav'

class Newmedico extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values, { setSubmitting }) {
    addMedico(values);
    setSubmitting(false);
    this.props.onNewMedico();
    this.props.history.push('/medico');
  }

  render() {
    // const { a, b, c }  = this.state;

    const initialValues = {
   
      nombre: '', apellido: '', cuil: '', matricula:'', especialidad:'', email:'', fecha_nacimiento:'', telefono:'', direccion:''
    };

    return (
      <Fragment>
        <Navs/>
         <Breadcrumb>
              <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
              <Breadcrumb.Item href="/medico">Medico</Breadcrumb.Item>
              <Breadcrumb.Item active>Nuevo Medico
              </Breadcrumb.Item>
            </Breadcrumb>

      <div className='container'>
      <h2 className="text-center mt-4">Nuevo Medico</h2> 

      <Formik initialValues={initialValues}
          onSubmit={this.onSubmit} >
          {({ isSubmitting }) => (
         <Form as={FormikForm}>
           <Form.Row>
           <Form.Group as={Col} >
           <Form.Label>Nombre</Form.Label>
           <Form.Control type="text" name='nombre' placeholder="Nombre" required as={Field} />
           </Form.Group>

           <Form.Group as={Col} >
           <Form.Label>Apellido</Form.Label>
           <Form.Control type="text" name='apellido' placeholder="Apellido" required as={Field} />
           </Form.Group>
       </Form.Row>
       <Form.Row>
           <Form.Group as={Col} >
           <Form.Label>Cuil</Form.Label>
           <Form.Control type="text" name='cuil' placeholder="Ingrese Cuil" required as={Field} />
           </Form.Group>

           <Form.Group as={Col} >
           <Form.Label>Fecha Nacimiento</Form.Label>
           <Form.Control type="text" name='fecha' placeholder="yyyy-mm-dd" required as={Field} />
           
           </Form.Group>
           <Form.Group as={Col} >
           <Form.Label>Matricula</Form.Label>
           <Form.Control type="number" name='matricula' placeholder="Matricula" required as={Field} />
           </Form.Group>
           
       </Form.Row>
       <Form.Row>
           <Form.Group as={Col} >
           <Form.Label>Email</Form.Label>
           <Form.Control type="email" name='email' placeholder="Email" required as={Field} />
           </Form.Group>
         
       </Form.Row>
       <Form.Row>
           
           <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Especialidad</Form.Label>
              <Form.Control as="select" defaultValue="Especialidad">
                <option>Clínico</option>
                <option>Cardiólogo</option>
                <option>Pediatra</option>
              </Form.Control>
            </Form.Group>  
            <Form.Group as={Col} >
           <Form.Label>Teléfono</Form.Label>
           <Form.Control type="number" name='telefono' placeholder="Teléfono" required as={Field} />
           </Form.Group>
          </Form.Row>
       <Form.Row>
       <Form.Group as={Col} >
           <Form.Label>Dirección</Form.Label>
           <Form.Control type="text" name='direccion' placeholder='Dirección' required as={Field} />
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

export default withRouter(Newmedico);
