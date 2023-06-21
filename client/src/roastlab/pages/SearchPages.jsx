import React, { useState, useEffect } from "react";
import { GetProductos } from '../helpers/get/get';

export function SearchPages() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    GetProductos()
      .then((data) => {
        setProductos(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
  };

  const thStyle = {
    padding: "8px",
    border: "1px solid #ccc",
    backgroundColor: "#f2f2f2",
    fontWeight: "bold",
  };

  const tdStyle = {
    padding: "8px",
    border: "1px solid #ccc",
  };

  const evenRowStyle = {
    backgroundColor: "#f9f9f9",
  };

  const hoverRowStyle = {
    backgroundColor: "#e6e6e6",
  };

  return (
    <div>
      <h1>Tabla de Productos</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Nombre</th>
            <th style={thStyle}>Descripción</th>
            <th style={thStyle}>Cantidad</th>
            <th style={thStyle}>Valor venta</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto, index) => (
            <tr
              key={producto.id}
              style={index % 2 === 0 ? evenRowStyle : {}}
              onMouseEnter={() => {
                setHoverRow(index);
              }}
              onMouseLeave={() => {
                setHoverRow(null);
              }}
            >
              <td style={tdStyle}>{producto.id}</td>
              <td style={tdStyle}>{producto.nombre}</td>
              <td style={tdStyle}>{producto.descripcion}</td>
              <td style={tdStyle}>{producto.cantidad}</td>
              <td style={tdStyle}>{producto.valorVenta}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
