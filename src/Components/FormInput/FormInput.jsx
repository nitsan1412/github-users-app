import React from "react";
import "./FormInput.css"
import {Form, Button, Row, Col} from "react-bootstrap" 

function FormInput ({handleUpdateState, addUser, newUser}) {
  return (
        <div className="form" >
            <Row className="align-items-center">
                <Col sm={5} className="my-1">
                  <Form.Control type="text" onChange={handleUpdateState} value={newUser} placeholder="Add new User" className="inputField"/>
                </Col>
                <Col xs="auto" className="my-1">
                  <Button type="submit" onClick={addUser} className="submitBtn">Add User</Button>
                </Col>
            </Row>
        </div>
     )
}

export default FormInput