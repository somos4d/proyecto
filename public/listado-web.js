async function eliminar(id){
    if(!confirm("¿Desea eliminar el registros con id = " + id + "?")){
        return;
    }
    const url = "/eliminar/web/" + id;
    const resp = await fetch(url,{
        method: "delete"
    });
    if(resp.ok){
        location.reload();
    }
    else{
        alert("Error al borrar el registro " + await resp.text());
        

    }
}