import { Saiyajin, Humano } from "./clases/Razas.js";
//se importa a través de un destructuring(?)

//Ahora lo que vamos a hacer es obtener los valores que se están colocando en el formulario, y generar la función que va a registrar al peleador en la tabla de participantes. La parte gráfica a haremos luego. Por ahora, haremos la parte funcional, tomando los valores del formulario y creando las instancias según las clases.

//esta es una variable global:
let participantes = [];


document.getElementById("btnRegistrar").addEventListener("click", () => {
    let nombre = document.getElementById("nombre");
    let raza = document.getElementById("raza");
    let previewElement = document.getElementById("preview");
    let imagenSrcBg = previewElement.style.backgroundImage;
    console.log(imagenSrcBg);
    let imgSrc = imagenSrcBg.slice(5, imagenSrcBg.length-2);
    console.log(imgSrc);
    let ki = document.getElementById("poderPelea");

    let nuevoParticipante;
    //según la raza que tenga este participante, es que haremos la instancia de la clase:
    if(raza.value == "Saiyajin") {
        nuevoParticipante = new Saiyajin(
            nombre.value, 
            imgSrc, 
            ki.value, 
            raza.value
            );
    } else if (raza.value == "Humano"){
        nuevoParticipante = new Humano(
            nombre.value, 
            imgSrc, 
            ki.value, 
            raza.value
            );
    }
    if(raza.value && nombre.value && ki.value && imagenSrcBg){
        participantes.push(nuevoParticipante);
        nombre.selectedIndex = 0
        raza.selectedIndex = 0
        previewElement.style.backgroundImage = "none"
        imagenSrcBg = previewElement.style.backgroundColor = "#f0f0f0"
        ki.value = ""
        reloadTable();
    } else {
        alert("Faltan datos por llenar");
    }
})


//En el próximo video representaremos gráficamente los participantes en la tabla de pariticipantes de la interfaz.

const reloadTable = () => {
    const participantesTemplate = document.getElementById("Participantes");
    participantesTemplate.innerHTML = "";
    participantes.forEach( (p, i) => {
        participantesTemplate.innerHTML += `
        <div class="px-3 pb-2 participante" data-fighter="${p.getNombre()}">
          <div class="card">
            <img src="${p.getImg()}" class="card-img-top">
            <div class="card-body">
              <h4 class="card-title">${p.getNombre()}</h4>
              <hr class="w-50 mx-auto">
              <h6 class="card-text">Raza: ${p.getRaza()}</h6>
              <h6 class="card-text">Poder de pelea: <span class="text-danger">${p.getPoder()}</span></h6>
              <button class="btn btn-outline-warning" onclick="activarHabilidad('${i}')">Habilidad Especial</button>
            </div>
          </div>
        </div>
        `
    } );
}

//en el próximo video veremos como quitar esto, incluyendo validaciones en el registro de peleadores.


//Con esto ejecutamos el método correspondiente al peleador, el cual va a implementar el poder de pelea y para que se pueda refrescar al usuario final, se usa la función reloadTable.

window.activarHabilidad = (i) => {
    const participante = participantes[i]
    if(participante.getRaza() == "Saiyajin"){
        participante.Transformacion()
    } else if (participante.getRaza() == "Humano") {
        participante.Coraje()
    }
    reloadTable();
}


//Próximo video: Programar el botón ¿quién es el más fuerte?

document.getElementById("btnMasFuerte").addEventListener("click", () => {
    const masFuerte = participantes.sort((a,b) => b.getPoder() - a.getPoder())[0]
    const nombre = masFuerte.getNombre()

    document.querySelector(`[data-fighter='${nombre}'] div`).style.boxShadow = "0px 0px 5px 1px yellow"
})
