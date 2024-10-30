//Destructuracion de dos objetos

const producto = {
    nombre : "Pantalla",
    precio : 150,
    disponible : false
}

const RUTA = {
    id: "asdfjabnsdklfjhbaihwef",
    ruta : "Camino a mi casa",
    puntos : {
        punto1 : "Calle Casimiro Cuadros 2"
    }
}

const {nombre} = producto
const {nombre: nombreCliente, direccion : {calle}} = cliente

console.log(nombre)
console.log(nombreCliente)
console.log(calle)

// console.table(producto)
// console.table(cliente)


