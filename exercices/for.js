//5-a)
var palabras = ["tomate", "lechuga", "zanahoria", "calabaza", "pera"];
for (var i = 0; i < palabras.length; i++) {
    alert(palabras[i])
}

//5-b)
for (var i = 0; i < palabras.length; i++) {
    primeraLetra = palabras[i].substring (0,1).toUpperCase();
    restoPalabra = palabras[i].substring (1).toLowerCase();
    palabraCompuesta = primeraLetra + restoPalabra;
    alert(palabraCompuesta)
}

//5-c)
var sentence = "";
for (var i = 0; i < palabras.length; i++) {
    sentence += palabras[i] + " ";
}
alert(sentence);

//5-d)
var numeros = [];
for (var i=0; i<10; i++){
    numeros[i] = i;
}
console.log(numeros);