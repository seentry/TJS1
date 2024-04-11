
let litrosProducidos = parseFloat(prompt("litros de leche producidos:"));

const LitroGalon = 3.785;

let galonesTotal = litrosProducidos / LitroGalon;

let precioGalon = 5; 

let Total = galonesTotal * precioGalon;

console.log("el total de galones es: " + galonesTotal);
console.log("El total es: " + Total + "€");
