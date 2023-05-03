function suma(){
    var resultado = document.getElementById("resultado");
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var suma = num1+num2;
    resultado.innerHTML = suma;
}
function resta(){
    var resultado = document.getElementById("resultado");
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var resta = num1-num2;
    resultado.innerHTML = resta;
}
function multi(){
    var resultado = document.getElementById("resultado");
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var multi = num1*num2;
    resultado.innerHTML = multi;
}
function dividir(){
    var resultado = document.getElementById("resultado");
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var dividir = num1/num2;
    resultado.innerHTML = dividir;
}


