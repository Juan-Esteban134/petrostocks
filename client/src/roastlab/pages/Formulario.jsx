import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  max-width: 400px;
  margin: 0 auto;
  margin-top: 40px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.input`
  padding: 10px 20px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const Formulario = () => {
  const [producto, setProducto] = useState({
    nombre: '',
    descripcion: '',
    precio: 0,
    bruto: 0,
    cantidad: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(producto);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="nombre">Nombre del producto:</Label>
        <Input type="text" id="nombre" name="nombre" value={producto.nombre} onChange={handleChange} required />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="descripcion">Descripción del producto:</Label>
        <TextArea id="descripcion" name="descripcion" value={producto.descripcion} onChange={handleChange} required />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="precio">Precio del producto:</Label>
        <Input type="number" id="precio" name="precio" step="50" value={producto.precio} onChange={handleChange} required />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="bruto">Precio bruto:</Label>
        <Input type="number" id="bruto" name="bruto" step="50" value={producto.bruto} onChange={handleChange} required />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="cantidad">Cantidad disponible:</Label>
        <Input type="number" id="cantidad" name="cantidad" value={producto.cantidad} onChange={handleChange} required />
      </FormGroup>

      <Button type="submit" value="Agregar producto" />
    </FormContainer>
  );
};

export default Formulario;
