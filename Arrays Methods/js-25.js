//Fetch API

const url = 'https://jsonplaceholder.typicode.com/comments'


fetch(url) //Me conecto a un servidor
    .then((response)=>{
        return response.json()//Si obtengo una respuesta, lo convierto a JSON
    }).then((data)=>{//De la respuesta convertida a JSON obtengo los datos
        console.log(data) // Imprimir o usar datos.
    }).catch((error)=>{//Si no tiene conexion por internet
        console.log(error)
    })
