import { useEffect, useState } from "react"
import { LineMasVendidos } from "../components"
import { GetMasVendido } from "../helpers/get/get"


export const GraphPage = () =>{
    const [ListaId, setLista] = useState([])
    const [Ventas, setVentas] = useState([])
    useEffect(()=>{
        GetMasVendido(setLista, setVentas)
    },[1])
    return(
        <>
        <h1>Graficas</h1>
        <div className="chart-container" style={{height:'35vh', width:'100%'}}>
        <LineMasVendidos Lista={ListaId} Ventas={Ventas}/>
        </div>
        </>
    )
}