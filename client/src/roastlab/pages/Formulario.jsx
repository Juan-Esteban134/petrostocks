import { useState } from 'react';
import Swal from 'sweetalert2';
import Addusuario from '../helpers/post/Addusuario';

export const Formulario = () => {
  const [Id, setId] = useState("")
  const [Nombre, setNombre] = useState("")
  const [Descripcion, setDescripcion] = useState("")
  const [Cantidad, setCantidad] = useState(0)
  const [PrecioBruto, setPrecioBruto] = useState(0)
  const [Precio, setPrecio] = useState(0)
  const [cantidadVendidos, setCantidadVendidos]= useState(0)

  const agregarProducto = () =>{
    if(Id!=="" && Nombre!=="" && Descripcion!=="" && Precio!==0 && PrecioBruto!==0 && Cantidad!==0){
      Addusuario(Id, Nombre, Descripcion, Cantidad, PrecioBruto, Precio, cantidadVendidos)
    }else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Porfavor llena todos los campos",
      });
    }
  }

  return (
    <div className='' style={{marginLeft: '30vh', marginRight: '30vh', marginTop: '5vh'}}>
    <div className="form-group">
        <label htmlFor="id">id</label>
        <input
          type="text"
          className="form-control"
          id="id"
          name="id"
          value={Id}
          onChange={(event) =>{
            setId(event.target.value)
          }}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          className="form-control"
          id="nombre"
          name="nombre"
          value={Nombre}
          onChange={(event) =>{
            setNombre(event.target.value)
          }}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="descripcion">Descripción</label>
        <textarea
          className="form-control"
          id="descripcion"
          name="descripcion"
          value={Descripcion}
          onChange={(event) =>{
            setDescripcion(event.target.value)
          }}
          required
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="precio">Precio</label>
        <input
          type="number"
          step="50"
          className="form-control"
          id="precio"
          name="precio"
          value={Precio}
          onChange={(event) =>{
            setPrecio(event.target.value)
          }}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="precioBruto">Precio Bruto</label>
        <input
          type="number"
          step="50"
          className="form-control"
          id="precioBruto"
          name="precioBruto"
          value={PrecioBruto}
          onChange={(event) =>{
            setPrecioBruto(event.target.value)
          }}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="cantidad">Cantidad</label>
        <input
          type="number"
          className="form-control"
          id="cantidad"
          name="cantidad"
          value={Cantidad}
          onChange={(event) =>{
            setCantidad(event.target.value)
          }}
          required
        />
      </div>
      <button onClick={agregarProducto} className="btn btn-primary mt-3">Agregar Producto</button>
    </div>
  );
};

export default Formulario;
