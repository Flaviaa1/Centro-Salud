import React, { Fragment } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Formik, Form as FormikForm, Field } from "formik";
import Button from "react-bootstrap/Button";
import { addPaciente } from "../ApiPacientes";
import { withRouter } from "react-router-dom";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Navs from '../nav'
class NuevoPaciente extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values, { setSubmitting }) {
    addPaciente(values);
    setSubmitting(false);
    this.props.onNewPaciente();
    this.props.history.push('/paciente');
  }

  render() {
    // const { a, b, c }  = this.state;

    const initialValues = {
   
      nombre: '', apellido: '', cuil: '', sexo:'',  email:'', fecha_nacimiento:'',  direccion:'',edad:''
    };

    return (
      <Fragment>
        <Navs></Navs>
         <Breadcrumb>
              <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
              <Breadcrumb.Item href="/paciente">Paciente</Breadcrumb.Item>
              <Breadcrumb.Item active>Nuevo Paciente
              </Breadcrumb.Item>
            </Breadcrumb>

      <div className='container'>
      <h2 className="text-center mt-4">Nuevo Paciente</h2> 

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
           <Form.Control type="text" name='fecha_nacimiento' placeholder="yyyy-mm-dd" required as={Field} />
           
           </Form.Group>
           
       </Form.Row>
       <Form.Row>
           <Form.Group as={Col} >
           <Form.Label>Edad</Form.Label>
           <Form.Control type="number" name='edad' placeholder="Edad" required as={Field} />
           </Form.Group>
           <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Sexo</Form.Label>
              <Form.Control as="select" defaultValue="sexo">
                <option>Femenino</option>
                <option>Masculino</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
       <Form.Row>
       <Form.Group as={Col} >
           <Form.Label>Dirección</Form.Label>
           <Form.Control type="text" name='direccion' placeholder='Dirección' required as={Field} />
           </Form.Group>
       </Form.Row>
        
       <Form.Row>
           <Form.Group as={Col} >
           <Form.Label>Email</Form.Label>
           <Form.Control type="email" name='email' placeholder="Email" required as={Field} />
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

export default withRouter(NuevoPaciente)
