window.addEventListener("load",()=>{
    const btnVideo= document.getElementById("btnVideo");
    btnVideo.addEventListener("click", cambiarVideo);
    const btnActualizar=document.getElementById("btnActualizar");
    btnActualizar.addEventListener("click", actualizar);

});

function cambiarVideo(){
    const url = document.getElementById("url");
    const video = document.getElementById("video");

    video.src = url.value;
}

async function actualizar(){
    const mensajeError = document.getElementById("mensajeError");
    const materia = document.getElementById("materia");
    const url = document.getElementById("url");
    const tema = document.getElementById("tema");
    const alumno = document.getElementById("alumno");
    
    console.log(1);
    let ok = true;
    mensajeError.innerText = "";

    materia.classList.remove("error");
    if(materia.value.trim() === ""){
        ok = false;
        materia.classList.add("error");

    }

    url.classList.remove("error");
    if(url.value.trim() === ""){
        ok = false;
        url.classList.add("error");
    }

    tema.classList.remove("error");
    if(tema.value.trim() === ""){
        ok = false;
        tema.classList.add("error");
    }

    alumno.classList.remove("error");
    if(alumno.value.trim() === ""){
        ok = false;
        alumno.classList.add("error");
    }

   

    if(!ok){
       mensajeError.innerText = "Todos los datos son requeridos";
    } 
    
    else{
        console.log(2);
        try{
            const respuesta= await fetch("/videos/nuevo",{
                method :"post",
                headers:{
                    "Content-Type": "application/json"
                },
                body : JSON.stringify({
                    materia: materia.value,
                    url: url.value,
                    tema: tema.value,
                    alumno: alumno.value,
                })
            
            });
            if(respuesta.ok){
                alert("Registros guardados correctamente");
                location.reload();
            }
            else{
                alert("Ocurrio un error "+ await respuesta.text());
            }
        }
        catch(e){
            alert("error de comunicacion con el servidor", e);

        }
    }
}

