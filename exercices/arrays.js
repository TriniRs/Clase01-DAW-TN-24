//3-a)
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] 
console.log(meses[5]);
console.log(meses[11]);

//3-b)
var mesesOrdenAlfabetico;
mesesOrdenAlfabetico = meses.slice();
mesesOrdenAlfabetico.sort();
console.log("Meses ordenados alfabéticamente: ", mesesOrdenAlfabetico);

//3-c)
meses.unshift("Inicio");
meses.push("Final");
console.log("Meses con elementos agregados: ", meses);

//3-d)
meses.shift();
meses.pop();
console.log("Meses con elementos eliminados: ", meses);

//3-e)
var mesesInvertidos = meses.slice();
mesesInvertidos.reverse();
console.log(mesesInvertidos);

//3-f)
var mesesUnidos = meses.join(" - ");
console.log("Meses separados por guiones:", mesesUnidos);

//3-e)
var mesesCopia = meses.slice(meses.indexOf("Mayo"), meses.indexOf("Noviembre") + 1);
console.log("Meses desde Mayo hasta Noviembre:", mesesCopia);