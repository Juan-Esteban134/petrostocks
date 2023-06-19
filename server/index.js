const express = require("express")
const datos = express()
const mysql = require("mysql")
const cors =require("cors")


datos.use(cors());
datos.use(express.json())

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"dbalmacen"
})

///--------------------------------------------------------metodos producto----------------------------------------
// guardar producto
datos.post("/create",(req,res)=>{
    const id = req.body.id
    const nombre = req.body.nombre
    const descripcion = req.body.descripcion
    const cantidad = req.body.cantidad
    const valorComprar = req.body.valorComprar
    const valorVenta = req.body.valorVenta
    const cantidadVendidos = req.body.cantidadVendidos
    db.query('INSERT INTO productos(id, nombre, descripcion, cantidad, valorComprar, valorVenta, cantidadVendidos) VALUES  (?,?,?,?,?,?,?)',[id, nombre, descripcion, cantidad, valorComprar, valorVenta,cantidadVendidos],
    (err,resul)=>{
        if(err){
            console.log(err);
             res.status(500).json({ error: err.code });
        }else{
            res.send(resul)
        }
    })
})

// consultar producto 

datos.get("/product/:id", (req, res) => {
    const id = req.params.id;

    db.query('SELECT * FROM productos WHERE id = ?', [id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: err.code });
        } else {
            if (result.length > 0) {
                res.send(result[0]);
            } else {
                res.status(404).json({ message: "Producto no encontrado" });
            }
        }
    });
});

// consultar productos

datos.get("/productos",(req,res)=>{
    db.query('SELECT * FROM productos',
    (err,resul)=>{
        if(err){
            console.log(err)
        }else{
            res.send(resul)
        }
    })
})

// editar producto

datos.post("/edit/:id",(req,res)=>{
    const id = req.params.id;
    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    const cantidad = req.body.cantidad;
    const valorComprar = req.body.valorComprar;
    const valorVenta = req.body.valorVenta;
    const cantidadVendidos = req.body.cantidadVendidos;

    db.query('UPDATE productos SET nombre=?, descripcion=?, cantidad=?, valorComprar=?, valorVenta=?, cantidadVendidos=? WHERE id=?', [nombre, descripcion, cantidad, valorComprar, valorVenta, cantidadVendidos, id],
    (err,result)=>{
        if(err){
            console.log(err);
            res.status(500).json({ error: err.code });
        }else{
            res.send(result);
        }
    })
})

//eliminar productos

datos.delete("/delete/:id",(req,res)=>{
    const id = req.params.id;

    db.query('DELETE FROM productos WHERE id=?', [id],
    (err,result)=>{
        if(err){
            console.log(err);
            res.status(500).json({ error: err.code });
        }else{
            res.send(result);
        }
    })
})

///--------------------------------------------------------metodos ventas----------------------------------------

datos.post("/ventas", (req, res) => {
    const idVenta = req.body.idVenta;
    const idProducto = req.body.idProducto;
    const ganancias = req.body.ganancias;
    const cantidadVenta = req.body.cantidadVenta;

    db.query('INSERT INTO ventas (idVenta, idProducto, ganancias, cantidadVenta) VALUES (?, ?, ?, ?)', [idVenta, idProducto, ganancias, cantidadVenta],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({ error: err.code });
            } else {
                res.send(result);
            }
        }
    );
});

datos.get("/ventas/:id", (req, res) => {
    const id = req.params.id;

    db.query('SELECT * FROM ventas WHERE idVenta = ?', [id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: err.code });
        } else {
            if (result.length > 0) {
                res.send(result[0]);
            } else {
                res.status(404).json({ message: "Venta no encontrada" });
            }
        }
    });
});


datos.get("/ventas", (req, res) => {
    db.query('SELECT * FROM ventas', (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: err.code });
        } else {
            res.send(result);
        }
    });
});



datos.put("/ventas/:id", (req, res) => {
    const id = req.params.id;
    const ganancias = req.body.ganancias;
    const cantidadVenta = req.body.cantidadVenta;

    db.query('UPDATE ventas SET ganancias = ?, cantidadVenta = ? WHERE idVenta = ?', [ganancias, cantidadVenta, id],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({ error: err.code });
            } else {
                res.send(result);
            }
        }
    );
});

datos.delete("/ventas/:id", (req, res) => {
    const id = req.params.id;

    db.query('DELETE FROM ventas WHERE idVenta = ?', [id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: err.code });
        } else {
            res.send(result);
        }
    });
});


//----------------------------------------------------------otros metosdos--------------------------------------

//prodcuto mas vendido

datos.get("/productos/mas-vendido", (req, res) => {
    db.query('SELECT idProducto, SUM(cantidadVenta) AS totalVentas FROM ventas GROUP BY idProducto ORDER BY totalVentas DESC LIMIT 1', (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: err.code });
        } else {
            if (result.length > 0) {
                res.send(result[0]);
            } else {
                res.status(404).json({ message: "No se encontraron productos vendidos" });
            }
        }
    });
});

// producto menos vendido

datos.get("/productos/menos-vendido", (req, res) => {
    db.query('SELECT idProducto, SUM(cantidadVenta) AS totalVentas FROM ventas GROUP BY idProducto ORDER BY totalVentas ASC LIMIT 1', (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: err.code });
        } else {
            if (result.length > 0) {
                res.send(result[0]);
            } else {
                res.status(404).json({ message: "No se encontraron productos vendidos" });
            }
        }
    });
});


// ganacias totales

datos.get("/ventas/total-ganancias", (req, res) => {
    db.query('SELECT SUM(ganancias) AS totalGanancias FROM ventas', (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: err.code });
        } else {
            if (result.length > 0) {
                res.send(result[0]);
            } else {
                res.status(404).json({ message: "No se encontraron ventas" });
            }
        }
    });
});

// numero de ventas

datos.get("/ventas/total-ventas", (req, res) => {
    db.query('SELECT COUNT(*) AS totalVentas FROM ventas', (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: err.code });
        } else {
            if (result.length > 0) {
                res.send(result[0]);
            } else {
                res.status(404).json({ message: "No se encontraron ventas" });
            }
        }
    });
});

// priducto de mayor rentabilidad 

datos.get("/productos/mayor-rentabilidad", (req, res) => {
    db.query('SELECT id, nombre, (valorVenta - valorComprar) AS rentabilidad FROM productos ORDER BY rentabilidad DESC LIMIT 1', (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: err.code });
        } else {
            if (result.length > 0) {
                res.send(result[0]);
            } else {
                res.status(404).json({ message: "No se encontraron productos" });
            }
        }
    });
});


datos.listen(3001,()=>{console.log("Funcionando manin")})
datos.get