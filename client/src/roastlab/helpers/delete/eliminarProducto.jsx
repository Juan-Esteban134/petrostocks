import axios from "axios";
import Swal from "sweetalert2";

export function borrar(id){
    axios.post("http://localhost:3001/delete", {
      id: id
    }).then(() => {
      Swal.fire({
        title: "<strong>Producto Eliminado</strong>",
        html: `<i> el producto fue eliminado con exito</i> `,
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

  export default borrar