import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function TextControlsExample() {
  return (
    <>
      <h2>Cuentanos, ¿En qué te podemos ayudar?</h2>
      <Form className="cont">
        <Form.Group className="form" controlId="exampleForm.ControlInput1">
          <Form.Label>Correo</Form.Label>
          <Form.Control
            className="control1"
            type="email"
            placeholder="Escribe tu Email"
          />
        </Form.Group>
        <Form.Group className="form1" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descripción</Form.Label>
          <Form.Control className="control2" as="textarea" />
        </Form.Group>
        <Button className="boton">Enviar</Button>
      </Form>
    </>
  );
}
