import axios from "axios";
import Swal from "sweetalert2";


export function Addusuario (Cedula, Nombre, Telefono, Email, Genero, Municipio, setEstadobutton, setEstadolectura, setMenuProduccion) {

      
       
        console.log(Cedula, Nombre, Telefono, Email, Genero, Municipio);
        axios.post("http://localhost:3001/create", {
          Cedula: Cedula,
          Nombre: Nombre,
          Tel: Telefono,
          Email: Email,
          Genero: Genero,
          Municipio: Municipio,
        }).then(() => {
            setMenuProduccion(true);
            setEstadobutton(true);
            setEstadolectura(true);
            Swal.fire({
              title: "<strong>Registro exitoso</strong>",
              html: `<i> el empleado ${Nombre} fue registrado con exito</i> `,
              icon: "success",
              timer: 3000,
            });
          })
          .catch((error)=> {
            if(error.response.data[error]=== "ER_DUP_ENTRY"){
              console.log("si")
            }
            //console.error('Error del backend:', error.response.data)
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