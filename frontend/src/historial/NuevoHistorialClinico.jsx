/*import React, { Fragment } from 'react'
import {useHistory} from 'react-router-dom' 
import { useFormik } from "formik";
const NuevoHistorialClinico = () => {

    const history = useHistory();
    

    const NuevoHistorialClinico = () => {

        alert('Se creo el historial Correctamente!')
        history.push('/HistorialClinico')
    } 
    return (
        <Fragment>
        <h2 className="text-center mt-4">Nuevo Historial Clinico</h2> 
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

                <button type="submit" className="btn btn-success float-right" onClick={NuevoHistorialClinico}>Nuevo Historial Clinico</button>
            </form>
       </div> 
     </Fragment>
    )
}

export default NuevoHistorialClinico ;
*/
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import React, { Fragment } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Formik, Form as FormikForm, Field } from "formik";
import Button from "react-bootstrap/Button";
import { addHistorial } from "../ApiHistorial";
import { withRouter} from "react-router-dom";
import Navs from '../nav'

class NuevoHistorialClininco extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};


    this.onSubmit = this.onSubmit.bind(this);
  }


  onSubmit(values, { setSubmitting }) {
    addHistorial(values);
    setSubmitting(false);
    this.props.onNewHistorial();
    this.props.history.push('/historialclinico');
  }

 

  render() {
 
    // const { a, b, c } = this.state;

    const initialValues = {
      Num_legajo: '', paciente: '', peso: '', altura:'', alergias:'', fecha:'',medicamento:'', tratamientos:''
    }; 
    


    return (
           <Fragment>
             <Navs></Navs>
              <Breadcrumb>
              <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
              <Breadcrumb.Item href="/historialclinico">Historial Clinico</Breadcrumb.Item>
              <Breadcrumb.Item active> Nuevo Historial
              </Breadcrumb.Item>
            </Breadcrumb>
           <div className=' container '>
           <h2 className="text-center mt-4">Nuevo Historial Clinico</h2> 
          <Formik initialValues={initialValues}
              onSubmit={this.onSubmit} >
        {({ isSubmitting }) => (
          <Form as={FormikForm}>
           <Form.Row>
                <Form.Group as={Col} >
                <Form.Label>Numero legajo</Form.Label>
                <Form.Control type="number" name='Num_legajo' placeholder="Numero de legajo" required as={Field} />
                </Form.Group>

                <Form.Group as={Col} >
                <Form.Label>Paciente</Form.Label>
                <Form.Control type="text" name='paciente' placeholder="Paciente" required as={Field} />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} >
                <Form.Label>Peso</Form.Label>
                <Form.Control type="text" name='peso' placeholder="Peso" required as={Field} />
                </Form.Group>

                <Form.Group as={Col} >
                <Form.Label>Altura</Form.Label>
                <Form.Control type="text" name='altura' placeholder="Altura" required as={Field} />
                </Form.Group>
                <Form.Group as={Col} >
                <Form.Label>Alergias</Form.Label>
                <Form.Control type="text" name='alergias' placeholder="Alergias" required as={Field} />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} >
                <Form.Label>Medicamento</Form.Label>
                <Form.Control type="text" name='medicamentos' placeholder="Paciente" required as={Field} />
                </Form.Group>

                <Form.Group as={Col} >
                <Form.Label>Tratamientos</Form.Label>
                <Form.Control type="text" name='tratamientos' placeholder="Tratamientos" required as={Field} />
                </Form.Group>
               
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} >
                <Form.Label>Opercaiones</Form.Label>
                <Form.Control type="text" name='operaciones' placeholder="Operaciones" required as={Field} />
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

export default withRouter(NuevoHistorialClininco);
