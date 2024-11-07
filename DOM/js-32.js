const formulario  = document.querySelector('#formulario')

formulario.addEventListener('submit',(e)=>{
    e.preventDefault()
    const nombre = document.querySelector('#Nombre').value
    const password = document.querySelector('#Contra').value

    const alertaPrevia = document.querySelector('.alerta1')
    alertaPrevia?.remove()
    
    const alerta = document.createElement('DIV')
    alerta.classList.add('alerta1','alerta2')
    console.log(alerta)
    
    if(nombre === '' || password === ''){
        alerta.textContent='Todo mal ... error de vacios'
        
    }else{
        alerta.textContent='Todo bien ... '
    }
    
    formulario.appendChild(alerta)
    setTimeout(() => {
        alerta.remove
    }, 2000);
})