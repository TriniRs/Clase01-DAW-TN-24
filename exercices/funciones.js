//6-a)
function suma(a, b) {
    return a + b;
}

var resultado = suma(7, 1);
console.log("Resultado:", resultado);

//6-b)
function suma(a,b){
    if (typeof a !== "number" || typeof b !== "number"){
        alert("Alguno de los parámetros no es un número");
        return NaN;
    }
    return a + b;
}

var resultado = suma (5, "tres");
console.log("Resultado:", resultado);

//6-c)

function validate(a){
    return Number.isInteger(a);
}
var numeroEntero = 4;
var numero = validate(4);
console.log(numeroEntero);
console.log("¿Es un entero?:", numero);
var numeroDecimal = 6.5;
var numero = validate(6.5);
console.log(numeroDecimal);
console.log("¿Es un entero?:", numero);

//6-d)
function suma(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert("Uno de los parámetros no es un número");
        return NaN;
    }

    if (!validate(a)) {
        alert("El primer parámetro no es un número entero. Se redondeará.");
        a = Math.round(a);
    }

    if (!validate(b)) {
        alert("El segundo parámetro no es un número entero. Se redondeará.");
        b = Math.round(b);
    }

    return a + b;
}

var resultado = suma(5.2, 3.8);
console.log("Resultado:", resultado);


//6-e)
function validateNumber(num) {
    if (typeof num !== 'number') {
        alert("El parámetro no es un número");
        return NaN;
    }
    if (!validate(num)) {
        alert("El parámetro no es un número entero.Se redondeará.");
        return Math.round(num);
    }
    return num;
}

function suma(a, b) {
    a = validateNumber(a);
    b = validateNumber(b);

    if (isNaN(a) || isNaN(b)) {
        return NaN;
    }
    return a + b;
}

var resultado = suma(6.7, 9.3);
console.log("Resultado:", resultado);