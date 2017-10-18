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
        if (sobre_nosotros.style.display == "none"|| sobre_nosotros.style.display == "") {
            sobre_nosotros.style.display = "grid";
            sobre_nosotros.style.animation = "skyfall 0.5s 1 linear";

            //body.style.animation = "slider 20s infinite alternate linear running";
        } else {
            //sobre_nosotros.style.animation = "skyrise 0.5s 1 linear";
            sobre_nosotros.style.display = "none";
            //body.style.animation = "slider 20s infinite alternate linear paused";
        }
    }, false);

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
    cabecera.innerHTML = "<header>"+
    "<script src="+"./js/header.js"+"></script>"+
        "<h1>CAFETERIA IESFSL</h1>"+
            "<nav id="+"navegacion"+">"+
            "<ul>"+
                "<li><a href="+"../index.html"+">SOBRE NOSOTROS</a></li>"+
                "<li><a href="+"./html/menu.html"+" >MENU</a></li>"+
                "<li><a href="+"./html/sugerencias.html"+">SUGERENCIAS</a></li>"+
                "<li id="+"user_info"+">"+
                    "<label id="+"head_username"+">Usuario</label>"+
                    "<img id="+"head_userimg"+ "src="+"../../img/login/usuario.png"+">"+
                "</li>"+
            "</ul>"+
        "</nav>"+
"</header>"
;
}
