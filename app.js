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
        
        console.log(amigos);
        
        //limpiar la lista
        listaHTML.innerHTML = "";

        //for en el array 'amigos'
        for (let i = 0; i < amigos.length; i++) {
            let li = document.createElement("li");
            li.textContent = amigos[i];
            listaHTML.appendChild(li);       
        }
      
        limpiarCaja();

    } else {
        //else-- si es vacio
        alert("Por favor, inserte un nombre.");    
    }  
}

/*
function sortearAmigo() {
    
}   
*/



