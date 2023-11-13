//let usuario = document.getElementById("usuario")
//let pass = document.getElementById("password")
console.log("usuario--> admin")
console.log("contraseña--> root")
//Copyright Thezero2023
//XD




usrot = "admin"
passt = "root"

const getValueInput = () => {
    let usuario = document.getElementById("usuario").value;
    let pass = document.getElementById("password").value;

    if (usuario == usrot && pass == passt) {
        //var aviso = document.getElementById("error-login")
        document.getElementById("error-login1").innerHTML = "Login correcto";
        open("/Sesion1-practica/index2.html")
        //open("D:/TRABAJOS MIGUEL/ClasesHuelga(Programacion)/sabes-quien-soy-main/index2.html")
    }
    if (usuario != usrot) {
        //var aviso = document.getElementById("error-login")
        document.getElementById("error-login2").innerHTML = "Usuario incorrecto";
    }
    if (pass != passt) {
        //var aviso = document.getElementById("error-login")
        document.getElementById("error-login3").innerHTML = "Contraseña incorrecto";
    }


}
const getValueReset = () => {
    document.getElementById("error-login1").innerHTML = "";
    document.getElementById("error-login2").innerHTML = "";
    document.getElementById("error-login3").innerHTML = "";
    //document.getElementById("usuario").innerHTML = "";
    $("#us").html('<input name="usuario" placeholder="Usuario" class="form-control" type="text" id="usuario">');
    //document.getElementById("password").innerHTML = "";
    $("#ps").html('<input class="form-control" id="password" type="password" placeholder="password" name="password" data-minLength="5" data-error="some error" required />');
}


var cod01 = "0937483448"
var cod02 = "8492348857"
var cod03 = "8576885488"
var cod04 = "8574834959"
var cod05 = "7582399922"
var cod06 = "5638388299"
var cod07 = "4775655683"
var cod08 = "7464373845"
var cod09 = "3829193933"
var cod10 = "8372744842"
var cod11 = "3848492938"
var cod12 = "3727484832"
var cod13 = "7428829948"
var cod14 = "4777483733"
var cod15 = "9382884388"
var cod16 = "0282883782"
var cod17 = "2348483990"
var cod18 = "8388483429"
var cod19 = "2480394932"
var cod20 = "8848499399"
var cod21 = "8488383737"
var cod22 = "3882938839"
var cod23 = "8474839288"
var cod24 = "2384839932"
var cod25 = "4949838844"
var cod26 = "8437844329"
var Cod27 = "977122305"
var cod28 = "1248999392"
var Cod29 = "2738493999"
var Cod30 = "6544547642"

var red = document.getElementById("red")
red.onclick = function () {
    alert("Si estas leyendo esto eres un Desarrollador, pero tengo un codigo oculto que tu y yo sabemos... lo escribes en la caja")
    //console.log("Si estas leyendo esto eres un Desarrolador, pero tengo un codigo oculto en algun lugar buscalo y lo escribes en la caja")
    console.log("Codigo--> Number Thezero phone")
}
var enviar = document.getElementById("evaluar")

//var borrar = document.getElementById("borrar")

const getInput = () => {
    let entrada = document.getElementById("entrada").value
    if (entrada === Cod27) {
        alert("Lo lograste, eres todo un desarrollador")
        alert("El codigo secreto es --> " + entrada)
        alert("Mi nombre es Thezero... Si estas leyendo esto escribeme al whatsapp y mandame la captura de tu misión.")
        
    } else {
        alert("Te equivocaste este no es el codigo!")
    }

}

const getReset = () => {
    //document.getElementById("entrada").innerHTML = "";
    $("#tr").html('<input class="entrada" maxlength="10" type="password" id="entrada" value="" required placeholder="escriba el codigo secreto">')
}





var envio = document.getElementById("envio")
envio.onclick = function (){
    let useg = document.getElementById("usuario").value;
    Thezero = "thezero"
    Yepeta = "yepeta"
    if (useg == Thezero) {
        $("#titulo").html("Thezero7")
    }
    if (useg == Yepeta) {
        $("#titulo").html("Yepeta4")
    }
    else {
        $("#titulo").html("Sin Login")
    }
}
var avatar = document.getElementById("avatar")
avatar.onclick = function (){
    alert("FIIS-PAPÁ")
}
