window.onload=function(){

    // evento para cambio al menú de los bocadillos
    document.getElementById("link_bocadillos").addEventListener("click",cambioBocadillos,false);

    // evento para cambio al menú de las bebidas
    document.getElementById("link_bebidas").addEventListener("click",cambioBebidas,false);

    // evento para cambio al menú de los cafés
    document.getElementById("link_cafes").addEventListener("click",cambioCafes,false);

    // evento para cambio al menú de los snakcs
    document.getElementById("link_snacks").addEventListener("click",cambioSnacks,false);


    document.getElementById("producto0").addEventListener("mouseover",mostrarIngredientes,false);

    document.getElementById("producto0").addEventListener("mouseout",ocultarIngredientes,false);


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


function mostrarIngredientes(){


    var producto= document.getElementById("producto0");
    var foto= document.getElementById("foto_bocadillo0");
    var info= document.getElementById("info_bocadillo0");

    producto.style.width="25%";
    producto.style.height="55%";
    producto.style.cursor="pointer";
    //producto.style.borderBottomLeftRadius="0px";
    //producto.style.borderBottomRightRadiusRadius="0px";
    foto.style.display="none";




    var ingrediente= document.getElementById("ingrediente0");
    ingrediente.style.display="block";
    ingrediente.style.border="#2c2c2c 2px solid";
    ingrediente.style.backgroundColor="rgba(255, 255, 255, 0.38);";
    ingrediente.style.color="white";
    ingrediente.style.width="auto";
    ingrediente.style.height="70%";
}

function ocultarIngredientes(){


    var producto= document.getElementById("producto0");

    producto.style.width="20%";
    producto.style.height="40%";

    var ingrediente= document.getElementById("ingrediente0");
    ingrediente.style.display="none";



}

