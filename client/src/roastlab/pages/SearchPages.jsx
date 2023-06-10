import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const SearchPages = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    axios
      .get("/productos")
      .then((response) => {
        setProductos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.id}</td>
              <td>{producto.nombre}</td>
              <td>{producto.descripcion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
