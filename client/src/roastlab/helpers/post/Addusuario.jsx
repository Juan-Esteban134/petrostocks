import axios from "axios";
import Swal from "sweetalert2";


export function Addusuario (id, nombre, descripcion, cantidad, valorComprar, valorVenta, cantidadVendidos) {
        console.log(id, nombre, descripcion, cantidad, valorComprar, valorVenta+ cantidadVendidos+" DATA");
        axios.post("http://localhost:3001/create", {
          id: id,  
          nombre: nombre,
          descripcion: descripcion,
          cantidad: parseInt(cantidad),
          valorComprar: parseInt(valorComprar),
          valorVenta: parseInt(valorVenta),
          cantidadVendidos: parseInt(cantidadVendidos)
        }).then(() => {
            Swal.fire({
              title: "<strong>Registro exitoso</strong>",
              html: `<i> el producto ${nombre} fue registrado con exito</i> `,
              icon: "success",
              timer: 3000,
            });
          })
          .catch((error)=> {
            console.error(error)
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

export default Addusuario