window.onload = function () {
    loadEvents();
}

function loadEvents() {
    document.getElementById("link_entrar").addEventListener("click", mostrarlogin, false);

    document.getElementById("entrar").addEventListener("click", entrar, false);

    // evento para cambio al menú de los bocadillos
    document.getElementById("link_bocadillos").addEventListener("click",cambioBocadillos,false);

    // evento para cambio al menú de las bebidas
    document.getElementById("link_bebidas").addEventListener("click",cambioBebidas,false);

    // evento para cambio al menú de los cafés
    document.getElementById("link_cafes").addEventListener("click",cambioCafes,false);

    // evento para cambio al menú de los snakcs
    document.getElementById("link_snacks").addEventListener("click",cambioSnacks,false);

}

function mostrarlogin(evento) {
    evento.preventDefault();
    var divlog = document.getElementById("login");
    if (divlog.style.display == "none" || divlog.style.display == "") {
        divlog.style.display = "block";
    } else {
        divlog.style.display = "none";
    }
}

function entrar() {
    alert("Bienvenido");

    var cabecera = document.getElementById("cabecera");
}
