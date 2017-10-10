window.onload = function() {
    eventos();
}

function eventos() {
    var boton_login = document.getElementById("entrar");
    boton_login.addEventListener("click", function(){
        this.preventDefault()
        var cuadro_login = document.getElementById('login');
        if(cuadro_login.style.display="none"){
            cuadro_login.style.display="block";
        } else {
            cuadro_login.style.display="none";
        }
    });
}

/*
function loguear(evento){
    evento.preventDefault();
    console.log('1');

    var divlog =document.getElementById("login");

    if(divlog.style.display=="none"||divlog.style.display==""){
        console.log('2');
        divlog.style.display="block";
    }else{
        console.log('3');
        divlog.style.display="none";
    }
}

window.onload=function(){

    document.getElementById("entrar").addEventListener("click",loguear,false);




}
*/
