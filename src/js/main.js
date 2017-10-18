window.onload=function(){

    // evento para cambio al menú de los bocadillos
    document.getElementById("link_bocadillos").addEventListener("click",cambioBocadillos,false);

    // evento para cambio al menú de las bebidas
    document.getElementById("link_bebidas").addEventListener("click",cambioBebidas,false);

    // evento para cambio al menú de los cafés
    document.getElementById("link_cafes").addEventListener("click",cambioCafes,false);

    // evento para cambio al menú de los snakcs
    document.getElementById("link_snacks").addEventListener("click",cambioSnacks,false);


}


// Función que muestra el menú de los bocadillos
function cambioBocadillos(){

    var divBocadillos=document.getElementById("bocadillos");
    divBocadillos.style.display="block";

    var divBebidas=document.getElementById("bebidas");
    divBebidas.style.display="none";

    var divCafes=document.getElementById("cafes");
    divCafes.style.display="none";

    var divSnacks=document.getElementById("snacks");
    divSnacks.style.display="none";
}

// Función que muestra el menú de las bebidas
function cambioBebidas(){

    var divBocadillos=document.getElementById("bocadillos");
    divBocadillos.style.display="none";

    var divBebidas=document.getElementById("bebidas");
    divBebidas.style.display="block";

    var divCafes=document.getElementById("cafes");
    divCafes.style.display="none";

    var divSnacks=document.getElementById("snacks");
    divCafes.style.display="none";
}

// Función que muestra el menú de los cafés
function cambioCafes(){

    var divBocadillos=document.getElementById("bocadillos");
    divBocadillos.style.display="none";

    var divBebidas=document.getElementById("bebidas");
    divBebidas.style.display="none";

    var divCafes=document.getElementById("cafes");
    divCafes.style.display="block";

    var divSnacks=document.getElementById("snacks");
    divSnacks.style.display="none";
}

// Función que muestra el menú de los snacks
function cambioSnacks(){

    var divBocadillos=document.getElementById("bocadillos");
    divBocadillos.style.display="none";

    var divBebidas=document.getElementById("bebidas");
    divBebidas.style.display="none";

    var divCafes=document.getElementById("cafes");
    divCafes.style.display="none";

    var divSnacks=document.getElementById("snacks");
    divSnacks.style.display="block";
}


