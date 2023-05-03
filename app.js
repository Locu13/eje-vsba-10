//Crear el servidor
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//configuraciones
app.use(express.static("public"));      //Para que busque el index.html
app.get("/",(req,res)=>{
    res.send("En teoria es el index.html");
})

app.get("*",(req,res)=>{
    //res.send("Error 404 | Not Found");
    res.sendFile(__dirname+"/public/not-found-404.html")
})

//Proceso
app.listen(port,()=>{
    console.log("Servidor corriendo en el puerto: ", port);
})