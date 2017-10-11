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

