// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function limpiarCaja() {
    document.getElementById("amigo").value = '';
}

function agregarAmigo(){
    
    if (document.getElementById('amigo').value !== '') {
        //si no es vacio
        amigos.push(document.getElementById("amigo").value);
        console.log(amigos);
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



