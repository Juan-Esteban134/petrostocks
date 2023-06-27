import { useEffect, useState } from "react"
import { LineMasVendidos } from "../components"
import { GetMasVendido, GetMayorRentabilidad } from "../helpers/get/get"
import { MayorRentabilidad } from "../components/Graficas/GraphMayorRent"


export const GraphPage = () =>{
    const [ListaId, setLista] = useState([])
    const [Ventas, setVentas] = useState([])
    const [ListaRent, setListaRent] = useState([])
    const [Rent, setRent] = useState([])
    const [ValorCompra, setValorCompra] = useState([])
    const [ValorVenta, setValorVenta] = useState([])
    useEffect(()=>{
        GetMasVendido(setLista, setVentas)
        GetMayorRentabilidad(setListaRent, setRent)
    },[1])
    return(
        <>
        <h2 style={{textAlign:'center'}}>Productos Mas Vendidos</h2>
        <div className="chart-container" style={{height:'35vh', width:'1fr',paddingRight:'10%', paddingLeft:'5%'}}>
        <LineMasVendidos Lista={ListaId} Ventas={Ventas}/>
        </div>
        <div className="chart-container" style={{height:'35vh', width:'1fr' ,paddingRight:'10%', paddingLeft:'5%'}}>
            <h2 style={{textAlign:'center'}}>Rentabilidad</h2>
        <MayorRentabilidad Lista={ListaRent} Rentabilidad={Rent}/>
        </div>
        </>
    )
}