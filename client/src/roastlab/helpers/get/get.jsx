import axios from "axios"

export function GetProductos() {
    return axios.get("http://localhost:3001/productos")
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
  }

  export function GetProductosVenta() {
    return axios.get("http://localhost:3001/productosVenta")
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
  }

  export function GetVentas() {
    return axios.get("http://localhost:3001/ventas2")
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
  }