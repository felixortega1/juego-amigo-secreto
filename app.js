// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function limpiarCaja() {
    document.getElementById("amigo").value = '';
}

function agregarAmigo(){
    
    if (document.getElementById('amigo').value !== '') {
        //si no es vacio
        amigos.push(document.getElementById("amigo").value);
        let listaHTML = document.getElementById("listaAmigos");
        
        //para comprobar si el array 'amigos'funciona
        console.log(amigos);
        
        //limpiar la lista
        listaHTML.innerHTML = "";

        //for en el array 'amigos'
        for (let i = 0; i < amigos.length; i++) {
            let liLista = document.createElement("li");
            liLista.textContent = amigos[i];
            listaHTML.appendChild(liLista);       
        }
      
        limpiarCaja();

    } else {
        //else-- si es vacio
        alert("Por favor, inserte un nombre.");    
    }  
}


function sortearAmigo(){ 
    //crear al amigo secreto
    let amigoSecreto = amigos[Math.floor(Math.random()*amigos.length)];
    //crear variable para conectar con el ul del HTML
    let ganadorHTML = document.getElementById("resultado");
    //forma de imprimir una oracion con variables dentro
    let textoGanador = document.createTextNode(`El amigo secreto es: ${amigoSecreto}`)
    
    //limpiar el espacio
    ganadorHTML.innerHTML = "";
    //mostrar en el HTML
    ganadorHTML.appendChild(textoGanador);        
}   




