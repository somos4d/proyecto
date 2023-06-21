const dotenv = require ("dotenv");
const {MongoClient, ServerApiVersion,ObjectId} = require("mongodb");
dotenv.config();

const client = new MongoClient(process.env.SERVIDOR_BASE_DE_DATOS, { 
        serverApi:{
        version:ServerApiVersion.v1,
        strict:true,
        deprecationErrors:true,
    }
});


async function eliminarVideo(req,res){

    const {id} = req.params;

    try{
        await client.connect();
    }
    catch(e){
        console.log("Error de conexion", e);
        res.status(500).send({
            mensaje:"Error de conexion",
            error:e
        });
    return;
    }

    try{
        let coleccion = client.db("proyecto").collection("Videos");
        const resultado = await coleccion.deleteOne({
        _id:new ObjectId(id)
    });

    res.send(resultado);
}

catch(e){
    console.log("Error en la consulta", e);
    res.status(500).send({
        mensaje: "Error en la consulta",
        error:e
    });
}
}



module.exports={
    eliminarVideo
}