import React, {Fragment} from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { withRouter, useHistory } from "react-router-dom";
import Navs from '../nav'

const EliminarMedico = () => {

    const history = useHistory();
    

    const eliminarMedico = () => {

        alert('Desea Eliminar?')
        history.push('/medico')
    } 
    return (
        <div>
            <Fragment>
            <Navs></Navs>
            <Breadcrumb>
                 <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
                 <Breadcrumb.Item href="/medico">Medico</Breadcrumb.Item>
                 <Breadcrumb.Item active>Baja Medico
                 </Breadcrumb.Item>
               </Breadcrumb>

                <div className= 'container'>
                <h2 className="text-center mt-4">Baja Medico</h2> 
                 <form action="">
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Seleccione un Medico</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>Florencia Rodriguez</option>
                            <option>Carlos Peralta</option>
                            <option>Andrea Cabrera</option>
                            <option>Soledad Gauna</option>
                            <option>Micaela Mellado</option>
                        </select>
                        </div>
                        <button onClick={eliminarMedico} className="btn btn-primary mt-5">Baja Medico</button>
                    </form>
                </div>
                    

            </Fragment> 
        </div>
    )
}

export default withRouter(EliminarMedico)
