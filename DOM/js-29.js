//Manipular elementos con JS
const encabezado = document.querySelector('.heading')
const titulo = document.querySelector('.titulo')
const enlaces = document.querySelectorAll('.enlaces a')

titulo.textContent = 'Mateo QP'

enlaces.forEach(data => data.textContent = 'Botones')
