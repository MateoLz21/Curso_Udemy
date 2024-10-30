// Objeto = Destructuring de dos o mas objetos

const producto = {
    nombre : "Pantalla",
    precio : 150,
    disponible : false
}

const cliente = {
    nombre : "Mateo",
    premiun : true,
}

// const carrito = {
//     cantidad : 1,
//     ...producto
// }

const nuevoObjeto = {
    ...producto, //spread operator
    ...cliente
}

const nuevoObjeto2 = Object.assign(producto,cliente)

console.log(nuevoObjeto)
console.log(nuevoObjeto2)