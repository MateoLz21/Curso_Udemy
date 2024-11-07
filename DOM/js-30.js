const titulo = document.querySelector('.titulo')

// titulo.addEventListener('click',()=>{
//     titulo.textContent='Nuevo titulo, Gracias'
// })

const enlaces = document.querySelectorAll('.enlaces a')

enlaces.forEach((data)=>{
    data.addEventListener('click', (evento)=>{
        console.log(evento)
        evento.preventDefault()//No hagas para lo que estas diseñado hacer por default
        data.className = 'botones_menu'
        data.textContent = 'Boton de menu'
    })
})
