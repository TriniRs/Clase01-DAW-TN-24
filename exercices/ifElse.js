//4-a)
var numero;
numero = Math.random();
console.log(numero);
if (numero >= 0.5){
    alert("Greater than 0,5");
}
else{
    alert("Lower than 0,5");
}

//4-b)
var age = Math.floor(Math.random() * 100);
console.log(age);

if (age < 2) {
    alert("Bebe");
} 
else if (age >= 2 && age < 13) { 
    alert("Niño");
} 
else if (age >= 13 && age < 20) { 
    alert("Adolescente");
} 
else if (age >= 20 && age < 31) {
    alert("Joven");
} 
else if (age >= 31 && age < 61) {
    alert("Adulto");
} 
else if (age >= 61 && age < 75) {
    alert("Adulto Mayor");
} 
else {
    alert("Anciano");
}