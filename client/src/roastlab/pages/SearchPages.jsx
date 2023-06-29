import { useState, useEffect } from "react";
import { GetProductos } from "../helpers/get/get";
import { UpdateProducto } from "../helpers/update/UpdateUsuario";
import { borrar } from "../helpers/delete/eliminarProducto";

export function SearchPages() {
  const [productos, setProductos] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    GetProductos()
      .then((data) => {
        setProductos(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const update = () => {
    console.log(selectedProduct);
    UpdateProducto(
      selectedProduct.id,
      selectedProduct.nombre,
      selectedProduct.descripcion,
      selectedProduct.cantidad,
      selectedProduct.valorComprar,
      selectedProduct.valorVenta
    );
  };

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

  // const hoverRowStyle = {
  //   backgroundColor: "#e6e6e6",
  // };

  //Css formulario
  const formContainerStyle = {
    maxWidth: "70%",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  };

  const formLabelStyle = {
    display: "block",
    marginBottom: "8px",
    fontWeight: "bold",
  };

  const formInputStyle = {
    width: "100%",
    padding: "8px",
    marginBottom: "16px",
    border: "1px solid #ccc",
    borderRadius: "3px",
  };

  const formButtonStyle = {
    padding: "8px 16px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
  };
  ////////////////////////////////////

  //logica de la edicion
  const handleEdit = (producto) => {
    setSelectedProduct(producto);
  };

  const handleEdit2 = (id) => {
    if (window.confirm("¿Estás seguro? Esta acción no se puede deshacer.")) {
      borrar(id);
      setTimeout(() => {
        location.reload();
      }, 1000);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Lógica para guardar los cambios del formulario
    console.log("Guardar cambios:", selectedProduct);
  };
  /////////////////////////////////////

  return (
    <div style={{position:'top'}}>
      <h1 style={{textAlign:'center', backgroundColor:'#FF6000', width:'100%', height:'80px', paddingTop:'15px', boxShadow:'0px 14px 15px -6px rgba(0,0,0,0.25)'}}>Tabla de Productos</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Nombre</th>
            <th style={thStyle}>Descripción</th>
            <th style={thStyle}>Cantidad</th>
            <th style={thStyle}>Valor Compra</th>
            <th style={thStyle}>Valor venta</th>
            <th style={thStyle}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto, index) => (
            <tr
              key={producto.id}
              style={index % 2 === 0 ? evenRowStyle : {}}
              // onMouseEnter={() => {
              //   setHoverRow(index);
              // }}
              // onMouseLeave={() => {
              //   setHoverRow(null);
              // }}
            >
              <td style={tdStyle}>{producto.id}</td>
              <td style={tdStyle}>{producto.nombre}</td>
              <td style={tdStyle}>{producto.descripcion}</td>
              <td style={tdStyle}>{producto.cantidad}</td>
              <td style={tdStyle}>{"$"+producto.valorComprar}</td>
              <td style={tdStyle}>{"$"+producto.valorVenta}</td>
              <td style={tdStyle}>
                <button className="btn btn-warning m-1" onClick={() => handleEdit(producto)}>Editar</button>
                <button className="btn btn-danger" onClick={() => handleEdit2(producto.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Formulario de edicion */}
      {selectedProduct && (
        <div style={formContainerStyle}>
          <h2>Editar Producto</h2>
          <form onSubmit={handleFormSubmit}>
            <label style={formLabelStyle}>ID:</label>
            <input
              type="text"
              value={selectedProduct.id}
              readOnly
              style={formInputStyle}
            />

            <label style={formLabelStyle}>Nombre:</label>
            <input
              type="text"
              value={selectedProduct.nombre}
              onChange={(event) =>
                setSelectedProduct({
                  ...selectedProduct,
                  nombre: event.target.value,
                })
              }
              style={formInputStyle}
            />

            <label style={formLabelStyle}>Descripción:</label>
            <input
              type="text"
              value={selectedProduct.descripcion}
              onChange={(event) =>
                setSelectedProduct({
                  ...selectedProduct,
                  descripcion: event.target.value,
                })
              }
              style={formInputStyle}
            />

            <label style={formLabelStyle}>Cantidad:</label>
            <input
              type="text"
              value={selectedProduct.cantidad}
              onChange={(event) =>
                setSelectedProduct({
                  ...selectedProduct,
                  cantidad: event.target.value,
                })
              }
              style={formInputStyle}
            />
            <label style={formLabelStyle}>Valor de Compra:</label>
            <input
              type="text"
              value={selectedProduct.valorComprar}
              onChange={(event) =>
                setSelectedProduct({
                  ...selectedProduct,
                  valorComprar: event.target.value,
                })
              }
              style={formInputStyle}
            />

            <label style={formLabelStyle}>Valor de Venta:</label>
            <input
              type="text"
              value={selectedProduct.valorVenta}
              onChange={(event) =>
                setSelectedProduct({
                  ...selectedProduct,
                  valorVenta: event.target.value,
                })
              }
              style={formInputStyle}
            />

            <button
              type="submit"
              style={formButtonStyle}
              onClick={() => {
                update();
                setTimeout(() => {
                  location.reload();
                }, 1000);
              }}
            >
              Guardar
            </button>
          </form>
        </div>
      )}
      {/* ... */}
    </div>
  );
}
