import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link, withRouter } from "react-router-dom";

function IssueFilter(props) {
  return (
    <div className= ' container mt-4'>
      <Form>
      <Form.Group as={Row}>
        <Form.Label column sm="1">
          Filtro
        </Form.Label>
        <Col sm="8" lg="9">
          <Form.Control name="filtro"
            value={props.filtro} onChange={props.onFiltroChanged} placeholder='Ingrese cualquier letra ' />
        </Col> 
        <Col sm="3" lg="2">
          <Link to={`${props.match.url}/nuevo`}>
            <Button variant="success">Nuevo</Button>
          </Link>
        </Col>
      </Form.Group>
    </Form>
    </div>
    
  );

}

export default withRouter(IssueFilter);