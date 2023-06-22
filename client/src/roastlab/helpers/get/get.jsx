import axios from "axios"
import { useState } from "react";

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

  export function GetMasVendido(setProductos, setVendidos) {
      axios.get("http://localhost:3001/productos_mas_vendidos")
      .then((response) => {
        var productos = []
        var totalVentas = []
        for (let index = 0; index < response.data.length; index++) {
          productos.push(response.data[index]['nombre'])
          totalVentas.push(response.data[index]['totalVentas'])
        }
        console.log(productos)
        setProductos(productos)
        console.log(totalVentas)
        setVendidos(totalVentas)
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
  }