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

datos.put("/edit",(req,res)=>{

    console.log("Mamada: "+req.body)
    const id = req.body.Id;
    const nombre = req.body.Nombre;
    const descripcion = req.body.Descripcion;
    const cantidad = req.body.Cantidad;
    const valorComprar = req.body.ValorComprar;
    const valorVenta = req.body.ValorVenta;


    db.query('UPDATE productos SET nombre=?, descripcion=?, cantidad=?, valorComprar=? ,valorVenta=? WHERE id=?', [nombre, descripcion, cantidad, valorComprar, valorVenta, id],
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


// crear venta

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

// obtener venta

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

// obtener ventas

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

//editar venta

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

//eliminar venta

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


//----------------------------------------------------------otros metodos--------------------------------------

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

// producto de mayor rentabilidad 

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


// ventas por dia 

datos.get("/ventas/por-dia/:fecha", (req, res) => {
    const fecha = req.params.fecha;
    
    // Obtener la fecha de inicio y fin del día
    const fechaInicio = new Date(fecha);
    fechaInicio.setHours(0, 0, 0, 0);
    
    const fechaFin = new Date(fecha);
    fechaFin.setHours(23, 59, 59, 999);
    
    db.query(
      'SELECT * FROM ventas WHERE fechaVenta >= ? AND fechaVenta <= ?',
      [fechaInicio, fechaFin],
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
  
// ingresos 

datos.get("/ventas/ingresos", (req, res) => {
    db.query(
      'SELECT SUM(ganancias) AS totalIngresos FROM ventas',
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).json({ error: err.code });
        } else {
          const totalIngresos = result[0].totalIngresos || 0;
          res.send({ totalIngresos });
        }
      }
    );
  });

// egresos 

datos.get("/ventas/egresos", (req, res) => {
    db.query(
      'SELECT SUM(costoCompra * cantidad) AS totalEgresos FROM ventas',
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).json({ error: err.code });
        } else {
          const totalEgresos = result[0].totalEgresos || 0;
          res.send({ totalEgresos });
        }
      }
    );
  });

  // vender 

  datos.post("/venderproducto", (req, res) => {
    const idProducto = req.body.id;
    const cantidadVenta = req.body.cantidad;
    console.log(req.body.id)
    console.log(req.body.cantidad)
  
    // Consultar el producto por su ID en la tabla de productos
    db.query(
      'SELECT * FROM productos WHERE id = ?',
      [idProducto],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).json({ error: err.code });
        } else if (result.length === 0) {
          res.status(404).json({ error: "Producto no encontrado" });
        } else {
          const producto = result[0];
          
          if (producto.cantidad < cantidadVenta) {
            res.status(400).json({ error: "No hay suficiente cantidad de producto disponible" });
          } else {
            // Calcular ganancias
            const ganancias = (producto.valorVenta - producto.valorComprar) * cantidadVenta;
  
            // Actualizar la cantidad de producto en la tabla de productos
            const nuevaCantidad = producto.cantidad - cantidadVenta;
            db.query(
              'UPDATE productos SET cantidad = ? WHERE id = ?',
              [nuevaCantidad, idProducto],
              (err, result) => {
                if (err) {
                  console.log(err);
                  res.status(500).json({ error: err.code });
                } else {
                  // Insertar la venta en la tabla de ventas
                  db.query(
                    'INSERT INTO ventas (idProducto, ganacias, cantidadVenta) VALUES (?, ?, ?)',
                    [idProducto, ganancias, cantidadVenta],
                    (err, result) => {
                      if (err) {
                        console.log(err);
                        res.status(500).json({ error: err.code });
                      } else {
                        res.send({ message: "Venta realizada exitosamente" });
                      }
                    }
                  );
                }
              }
            );
          }
        }
      }
    );
  });
  
  

  



datos.listen(3001,()=>{console.log("Funcionando manin")})
datos.get