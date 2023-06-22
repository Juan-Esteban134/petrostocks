import { useState, useEffect } from "react";
import { GetVentas } from "../helpers/get/get";

export function RegisterPage() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    GetVentas()
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
    textAlign: "center", // Alineación centrada para la columna del botón
  };

  const evenRowStyle = {
    backgroundColor: "#f9f9f9",
  };

  return (
    <div>
      <h1>Registro de ventas</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Id Producto</th>
            <th style={thStyle}>Ganancias</th>
            <th style={thStyle}>Cantidad Vendida</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto, index) => (
            <tr key={producto.id} style={index % 2 === 0 ? evenRowStyle : {}}>
              <td style={tdStyle}>{producto.idVenta}</td>
              <td style={tdStyle}>{producto.idProducto}</td>
              <td style={tdStyle}>{"$"+producto.ganacias}</td>
              <td style={tdStyle}>{producto.cantidadVenta}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
