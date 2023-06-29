import { useState, useEffect } from "react";
import { GetVentas, GetGanancias } from "../helpers/get/get";

export function RegisterPage() {
  const [productos, setProductos] = useState([]);
  const [ganancias, setGanancias] = useState([]);

  useEffect(() => {
    GetVentas()
      .then((data) => {
        setProductos(data);
      })
      .catch((error) => {
        console.error(error);
      });
      GetGanancias()
      .then((data) => {
        setGanancias(data);
        console.log("Register"+ ganancias);
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
      <h1 style={{textAlign:'center', backgroundColor:'#FF6000', width:'100%', height:'80px', paddingTop:'15px', boxShadow:'0px 14px 15px -6px rgba(0,0,0,0.25)'}}>Registro de ventas</h1>
      <table style={tableStyle}>
        <thead>
        {ganancias.map((ganancia) => (
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Id Producto</th>
            <th style={thStyle}>Ganancias {"$"+ganancia.sisa}</th>
            <th style={thStyle}>Cantidad Vendida</th>
          </tr>
          ))}
        </thead>
        <tbody>
          {productos.map((producto, index) => (
            <tr key={producto.id} style={index % 2 === 0 ? evenRowStyle : {}}>
              <td style={tdStyle}>{producto.idVenta}</td>
              <td style={tdStyle}>{producto.idProducto}</td>
              <td style={tdStyle}>{"$"+producto.ganancias}</td>
              <td style={tdStyle}>{producto.cantidadVenta}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
