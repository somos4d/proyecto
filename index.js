const express = require("express");
const dotenv = require("dotenv");

//const p1 = require("./routers/inicio");
const InicioRouter = require("./routers/inicio")
const VideosRouter = require("./routers/videos");
const InfografiaRouter = require("./routers/infografias");
const AlumnosRouter = require("./routers/alumnos");
const AgregarVideoRouter = require("./routers/nuevo-video");
const EliminarVideoRouter = require("./routers/eliminar-videos");

dotenv.config();
const app = express();
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//app.use("/", p1);
app.use("/", InicioRouter);
app.use("/videos", VideosRouter);
app.use("/infografias", InfografiaRouter); 
app.use("/alumnos", AlumnosRouter);
app.use("/videos", AgregarVideoRouter);
app.use("/eliminar", EliminarVideoRouter);

app.listen(process.env.PUERTO, ()=>{
    console.log("Aplicacion funcionando en el puerto: " + process.env.PUERTO + ":)"); 
});