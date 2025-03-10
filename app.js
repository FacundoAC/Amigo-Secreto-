// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
    function agregarAmigo() {
        const input = document.getElementById("amigo");
        const nombre = input.value.trim();

        if(nombre === "") {
            alert("Por favor, inserte un nombre.");
            return
        }

        amigos.push(nombre);

        actualizarLista();

        input.value = "";
    }

    function actualizarLista() {
        const lista = document.getElementById("listaAmigos");

        lista.innerHTML = "";

        for(let amigo of amigos) {
            const li = document.createElement("li")
            li.textContent = amigo;
            lista.appendChild(li);
        }
    }

    function sortearAmigo(){
        const resultado = document.getElementById("resultado");

        if(amigos.length === 0){
            alert("No hay amigos en la lista para sortear");
            return;
        }

        const indiceAleatorio = Math.floor(Math.random() * amigos.length);

        const amigoSorteado = amigos[indiceAleatorio];

        resultado.innerHTML = `<li>🎉 El amigo sorteado es: <strong>${amigoSorteado}</strong> 🎉</li>`;
    }