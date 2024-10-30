//Objetos - Manipulacion

const producto = {
    nombre : "Pantalla",
    precio : 150,
    disponible : false
}

// Object.freeze(producto)
// Object.seal(producto)


//Reescribir un valor
producto.disponible = true
//Si no existe añade
producto.imagen = 'imagen.jpg'


console.table(producto)
