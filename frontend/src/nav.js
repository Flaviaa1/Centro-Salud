import React from 'react'
import { withRouter} from "react-router-dom";
const nav = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="Size">Nido<br/><p className="Size2">SISTEMAS DE GESTION DE TURNOS
            PARA CENTROS DE SALUD</p></a>
            
            
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
            </form>
       </nav>

    )
}

export default withRouter(nav)
