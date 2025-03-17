// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function agregarAmigo() {

    let nombreAmigoImput = document.getElementById('amigo');
    let nombreAmigo = nombreAmigoImput.value.trim();

    if (nombreAmigo === '') {
        alert('Por favor inserte un nombre');
        return;
    }

    amigos.push(nombreAmigo);
    actualizarListaAmigos()
    nombreAmigoImput.value = '';
}
function actualizarListaAmigos() {

    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(amigo => {

        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);

    });


}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert('No hay amigos disponibles')
        return;
    }
    let randomIndex = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[randomIndex];
    amigos.splice(randomIndex, 1);
    let resultadoAmigoSecreto = document.getElementById("resultado");
    resultadoAmigoSecreto.innerHTML = `El amigo secreto es ::${amigoSecreto}`;
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

}
