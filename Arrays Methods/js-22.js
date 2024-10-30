//Optional Chaining operator

const alumno = {
    nombre : 'Juan',
    clase : 'Programacion 1',
    aprobado : true,
    examenes : {
        examen1: 99
    }
}

console.log(alumno?.clase)
console.log(alumno.examenes?.examen1)
console.log(alumno)



//Nullish coalescing operator

const pagina = null ?? 1
console.log(pagina)


