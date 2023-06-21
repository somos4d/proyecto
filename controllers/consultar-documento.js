const dotenv = require("dotenv");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
dotenv.config();

const client = new MongoClient (process.env.SERVIDOR_BASE_DE_DATOS, {
    serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors:true,
    }
})
 //Videos
async function VideosWeb(req,res) {
try{
    await client.connect();
}
catch(e){
    res.status(500).send(e);
    return;
}
let datos =[];
try{
    let coleccion = client.db("proyecto").collection("Videos");
    datos=await coleccion.find({Materia: "Paginas Web"}).toArray();
}
catch(e){
    res.status(500).send(e);
    return;
}
    res.render("VideosWeb",{ datos});
}

async function VideosServidor(req,res) {
    try{
        await client.connect();
    }
    catch(e){
        res.status(500).send(e);
        return;
    }
    let datos =[];
    try{
        let coleccion = client.db("proyecto").collection("Videos");
        datos=await coleccion.find({Materia: "Aplicaciones Servidor"}).toArray();
    }
    catch(e){
        res.status(500).send(e);
        return;
    }
    res.render("VideosServidor",{ datos});
}

async function VideosCliente(req,res) {
    try{
        await client.connect();
    }
    catch(e){
        res.status(500).send(e);
        return;
    }
    let datos =[];
    try{
        let coleccion = client.db("proyecto").collection("Videos");
        datos=await coleccion.find({Materia: "Aplicaciones Cliente"}).toArray();
    }
    catch(e){
        res.status(500).send(e);
        return;
    }
    res.render("VideosCliente",{ datos});
}

//Infografia
async function InfografiasWeb(req,res) {
    try{
        await client.connect();
    }
    catch(e){
        res.status(500).send(e);
        return;
    }
    let datos =[];
    try{
        let coleccion = client.db("proyecto").collection("infografias");
        datos=await coleccion.find({Materia: "Paginas Web"}).toArray();
    }
    catch(e){
        res.status(500).send(e);
        return;
    }
    res.render("InfografiasWeb",{ datos});
}

async function InfografiasServidor(req,res) {
    try{
        await client.connect();
    }
    catch(e){
        res.status(500).send(e);
        return;
    }
    let datos =[];
    try{
        let coleccion = client.db("proyecto").collection("infografias");
        datos=await coleccion.find({Materia: "Aplicaciones Servidor"}).toArray();
    }
    catch(e){
        res.status(500).send(e);
        return;
    }
    res.render("InfografiasServidor",{ datos});
}

async function InfografiasCliente(req,res) {
    try{
        await client.connect();
    }
    catch(e){
        res.status(500).send(e);
        return;
    }
    let datos =[];
    try{
        let coleccion = client.db("proyecto").collection("infografias");
        datos=await coleccion.find({Materia: "Aplicaciones Cliente"}).toArray();
    }
    catch(e){
        res.status(500).send(e);
        return;
    }
    res.render("InfografiasCliente",{ datos});
}

//Alumnos
async function Alumnos(req,res) {
    try{
        await client.connect();
    }
    catch(e){
        res.status(500).send(e);
        return;
    }
    let datos =[];
    try{
        let coleccion = client.db("proyecto").collection("Alumnos");
        datos=await coleccion.find({}).toArray();
    }
    catch(e){
        res.status(500).send(e);
        return;
    }
    res.render("Alumnos",{ datos});
}
        


module.exports={
    VideosWeb,
    VideosServidor,
    VideosCliente,
    InfografiasWeb,
    InfografiasServidor,
    InfografiasCliente,
    Alumnos
}