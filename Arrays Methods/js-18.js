const disponible = 4000
const retirar = 200

// if(disponible >= retirar){
//     console.log("Acceso permitido")
// } else {
//     console.log("Acceso no permitido")
// }

const num1 = 20
const num2 = "20"

// === Igual estricto, recomendable de usar

// if(num1 === num2){
//     console.log("Son iguales")
// } else{
//     console.log("No Son iguales")
// }

const saldo = 1000
const pagar = 800
const tarjeta = false

if (saldo > pagar && tarjeta){
    console.log("Puedes pagar")
} else {
    console.log("No puedes pagar")
}

if (saldo > pagar || tarjeta){
    console.log("Puedes pagar")
} else {
    console.log("No puedes pagar")
}





