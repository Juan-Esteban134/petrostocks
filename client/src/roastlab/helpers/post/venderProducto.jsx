import axios from "axios";
import Swal from "sweetalert2";

export function vender(id, cantidad){
    axios.post("http://localhost:3001/venderproducto", {
      id: id,
      cantidad: parseInt(cantidad)
    }).then(() => {
      Swal.fire({
        title: "<strong>Venta exitosa</strong>",
        html: `<i> el producto fue vendido con exito</i> `,
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

  export default vender