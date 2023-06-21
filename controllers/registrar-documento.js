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

function Nuevo(req, res){
    res.render("videos-nuevo");
}

async function Agregar(req, res) {
    const { materia, url, tema, alumno } =req.body;
    if( !materia || !url || !tema || !alumno ){
        res.status(400).send("LOS ATRIBUTOS MATERIA, URL, TEMA Y ALUMNO SON REQUERIDOS");
        return;
    }
    
    try{
        await client.connect();
    }
    catch(e){
        res.status(500).send(e);
        return;
    }

    try{
        let coleccion = client.db("proyecto").collection("Videos");
        let resultado = await coleccion.insertOne({
            Materia: materia,
            Url: url,
            Tema: tema,
            Alumno: alumno  
        });

        res.send(resultado);
    }
    catch(e){
        res.status(500).send(e);
        return;
    }
}



module.exports = {
    Nuevo,
    Agregar
}