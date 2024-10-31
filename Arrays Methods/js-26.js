//Fetch API

const url = 'https://jsonplaceholder.typicode.com/comments'

// const consultarApi = () => {
//     fetch(url) //Me conecto a un servidor
//     .then((response)=>{
//         return response.json()//Si obtengo una respuesta, lo convierto a JSON
//     }).then((data)=>{//De la respuesta convertida a JSON obtengo los datos
//         console.log(data) // Imprimir o usar datos.
//     }).catch((error)=>{//Si no tiene conexion por internet
//         console.log(error)
//     })

// }

const consultarApi = async () => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
consultarApi()
