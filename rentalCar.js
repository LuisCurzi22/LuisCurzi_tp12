const prompt = require('prompt-sync')();

console.log(`Bienvenido a nuestro alquier de autos.
    1* Compacto: 14000
    2* Mediano: 17000
    3* Camioneta: 28000`)

const rentaAuto = +prompt(`Ingrece el auto que desea alquira: `)

const rentaDiasAuto = +prompt(`tiene un maximo de 15 dias
    Ingrece los dias que desea alquira el auto: `)

const rentaSilla = +prompt(`Silla para niños: 1200
    Si quiere alquilar una silla para niños, ingrese el valor de la silla par niño. En caso de que no quiera, ingrece "0":
    Ingrece su valor: `)

const rentaDiasSilla= +prompt(`Si alquilo la silla para niños, ingrece la cantidad de dias que la quiere alquilar. En caso de que no la alquilo, ingrece "0"
    ingrece su valor: `)

function rentalCar(){
    let montoTotal = rentaAuto * rentaDiasAuto + rentaSilla * rentaDiasSilla;
    return montoTotal
}
const montoTotal = rentalCar();
console.log(montoTotal);