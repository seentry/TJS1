let metrosCubicos = parseFloat(prompt('metrosCubicos'));

const PrecioMetro = 0.50;

let pago = metrosCubicos * PrecioMetro;

console.log("El pago por el consumo de " + metrosCubicos + " metros cúbicos de agua es: " + pago);