const tecnologias = ['HTML', 'CSS', 'JS', 'REACT JS', 'NODE JS']
console.table(tecnologias)

const nuevasTecnologias = [...tecnologias, 'NEXT JS']
// console.table(nuevasTecnologias)

// const filterTecnologias = tecnologias.filter(function(tech){
//     if(tech !== "HTML"){
//         return tech
//     }
// })
// console.log(filterTecnologias)

const filterTecnologias = tecnologias.map(function(data){
    if(data === 'JS'){
        return 'JAVASCRIPT'
    } else {
        return data
    }
})
console.log(filterTecnologias)

