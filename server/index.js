const express = require("express")
const datos =express()
const mysql = require("mysql")
const cors =require("cors")


datos.use(cors());
datos.use(express.json())

const db =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"dbalmacen"

})

///--------------------------------------------------------guardar datos----------------------------------------
// guardar producto
datos.post("/create",(req,res)=>{
    const id = req.body.id
    const nombre = req.body.nombre
    const descripcion = req.body.descripcion
    const cantidad = req.body.cantidad
    const valorComprar = req.body.valorComprar
    const cantidadVendidos = req.body.cantidad
    console.log(req.body)

    db.query('INSERT INTO `productos`(`id`, `nombre`, `descripcion`, `cantidad`, `valorComprar`, `valorVenta`, `cantidadVendidos`) VALUES  (?,?,?,?,?,?,?)',[id, nombre, descripcion, cantidad, valorComprar, cantidadVendidos],
    (err,resul)=>{
        if(err){
             res.status(500).json({ error: err.code });
        }else{
            res.send(resul)
        }
    })
})

// consultar producto
datos.get("/productos",(req,res)=>{
     console.log("eje")
    db.query('SELECT * FROM productos',
    (err,resul)=>{
        if(err){
            console.log(err)
        }else{
            res.send(resul)
        }
    })
})

datos.listen(3001,()=>{console.log("Funcionando manin")})