let horasTrabajadas = parseFloat(prompt('horas'));
let sueldoHora = parseFloat(prompt('sueldoHora'));

let sueldoSemanal = horasTrabajadas * sueldoHora;

document.getElementById('resultado').innerHTML = "El sueldo semanal es: " + sueldoSemanal + "€";