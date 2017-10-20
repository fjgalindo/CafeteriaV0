window.onload = function () {
    loadEvents();
}

function loadEvents() {
    document.getElementById("link_entrar").addEventListener("click", mostrarlogin, false);

    document.getElementById("entrar").addEventListener("click", entrar, false);

    document.getElementById("link_sobre_nosotros").addEventListener("click", function (evento) {
        evento.preventDefault();
        var sobre_nosotros = document.getElementById("sobre_nosotros");
        //var body = document.getElementsByTagName("body");
        if (sobre_nosotros.style.display == "none" || sobre_nosotros.style.display == "") {
            sobre_nosotros.style.display = "grid";

            //body.style.animation = "slider 20s infinite alternate linear running";
        } else {
            //sobre_nosotros.style.animation = "skyrise 0.5s 1 linear";
            sobre_nosotros.style.display = "none";
            //body.style.animation = "slider 20s infinite alternate linear paused";
        }
    }, false);
var carro=  document.getElementById("cart");
    carro.addEventListener("click", mostrarcesta, false);

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
    $("#cabecera").load("./html/header_loged.html");
}
function mostrarcesta() {
    var tienda = document.getElementById("tienda");
    if (tienda.style.display == "none" || tienda.style.display == "") {
        tienda.style.display = "block";
    } else {
        tienda.style.display = "none";
    }
}
