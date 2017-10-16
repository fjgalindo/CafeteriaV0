function login(evento) {
    evento.preventDefault();
    var divlog = document.getElementById("login");
    if (divlog.style.display == "none" || divlog.style.display == "") {
        divlog.style.display = "block";

    } else {
        divlog.style.display = "none";
    }
}

window.onload = function () {
    document.getElementById("boton_entrar").addEventListener("click", login, false);

}
