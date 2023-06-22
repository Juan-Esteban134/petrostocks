import axios, { Axios } from "axios";
import Swal from "sweetalert2";

export function UpdateProducto(id, nombre, descripcion, cantidad, valorCompra, valorVenta){
  console.log("Trayendo esta mamada:"+ id +", "+ nombre+", "+ descripcion+", "+ cantidad+", "+valorCompra+", "+ valorVenta);
    axios.put("http://localhost:3001/edit",{
     Id: id,
     Nombre:nombre,
     Descripcion:descripcion,
     Cantidad :cantidad,
     ValorVenta: valorVenta,
     ValorComprar: valorCompra,
    }).then(() => {
      Swal.fire({
        title: "<strong>Actializacion exitosa</strong>",
        html: `<i> el empleado ${nombre} fue actualizado</i> `,
        icon: "success",
        timer: 3000,
      });
    }).catch(function (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text:
          JSON.parse(JSON.stringify(error)).message === "Network Error"
            ? "Intente mas tarde"
            : JSON.parse(JSON.stringify(error)).message,
      });
    });
}