
let baseRectangulo = parseFloat(prompt("base del rectángulo:"));
let alturaRectangulo = parseFloat(prompt("altura del rectángulo:"));

let areaRectangulo = baseRectangulo * alturaRectangulo;

let baseTriangulo = parseFloat(prompt("base del triángulo:"));
let alturaTriangulo = parseFloat(prompt("altura del triángulo:"));

let areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

let areaTotal = areaRectangulo + areaTriangulo;

window.alert("area calculada");
document.write("El área total del terreno es: " + areaTotal);

