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
        <h2 style={{textAlign:'center', backgroundColor:'#FF6000', width:'100%', height:'60px', paddingTop:'10px', boxShadow:'0px 14px 15px -6px rgba(0,0,0,0.25)'}}>Productos Mas Vendidos</h2>
        <div className="chart-container" style={{height:'35vh', width:'1fr',paddingRight:'10%', paddingLeft:'5%'}}>
        <LineMasVendidos Lista={ListaId} Ventas={Ventas}/>
        </div>
        <h2 style={{textAlign:'center', backgroundColor:'#FF6000', width:'100%', height:'60px', paddingTop:'10px', boxShadow:'0px 14px 15px -6px rgba(0,0,0,0.25)'}}>Rentabilidad</h2>
        <div className="chart-container" style={{height:'35vh', width:'1fr' ,paddingRight:'10%', paddingLeft:'5%'}}>
        <MayorRentabilidad Lista={ListaRent} Rentabilidad={Rent}/>
        </div>
        </>
    )
}