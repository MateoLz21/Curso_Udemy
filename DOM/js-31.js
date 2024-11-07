const nombre = document.querySelector('#Nombre')
const password = document.querySelector('#Contra')

nombre.addEventListener("input",(e)=>{
    console.log(e.target.value)
})

password.addEventListener("input",functionPassword)

function functionPassword(){
    password.type = "text"
    setTimeout(()=>{
        password.type = "password"
    },300)
}


