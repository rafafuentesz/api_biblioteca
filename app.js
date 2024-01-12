const express = require('express');
const app = express();
app.use(express.json());

//importamos el router de libros

const librosRouter = require('./routes/libros');

//importamos el middleware de error handler

const errorHandler = require('./middleware/errorHandler');


//pongo el url ya que al tenerla aca no hace falta en routes
app.use('/libros', librosRouter);

app.use(errorHandler);

app.listen(3000, ()=>{
    console.log('Servidor iniciado en el puerto 3000');

});

