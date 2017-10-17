window.onload = function () {
    loadEvents();
}

function loadEvents() {
    document.getElementById("link_entrar").addEventListener("click", mostrarlogin, false);

    document.getElementById("entrar").addEventListener("click", entrar, false);
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
