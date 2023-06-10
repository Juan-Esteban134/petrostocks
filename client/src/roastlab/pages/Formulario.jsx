import React, { useState } from 'react';

export const Formulario = () => {
  const [product, setProduct] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    precioBruto: '',
    cantidad: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica para enviar los datos del producto
    console.log(product);
    // Luego puedes reiniciar el formulario
    setProduct({
      nombre: '',
      descripcion: '',
      precio: '',
      precioBruto: '',
      cantidad: ''
    });
  };

  return (
    <div className='' style={{marginLeft: '30vh', marginRight: '30vh', marginTop: '5vh'}}>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          className="form-control"
          id="nombre"
          name="nombre"
          value={product.nombre}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="descripcion">Descripción</label>
        <textarea
          className="form-control"
          id="descripcion"
          name="descripcion"
          value={product.descripcion}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="precio">Precio</label>
        <input
          type="number"
          step="0.01"
          className="form-control"
          id="precio"
          name="precio"
          value={product.precio}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="precioBruto">Precio Bruto</label>
        <input
          type="number"
          step="0.01"
          className="form-control"
          id="precioBruto"
          name="precioBruto"
          value={product.precioBruto}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="cantidad">Cantidad</label>
        <input
          type="number"
          className="form-control"
          id="cantidad"
          name="cantidad"
          value={product.cantidad}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary mt-3">Agregar Producto</button>
    </form>
    </div>
  );
};

export default Formulario;
