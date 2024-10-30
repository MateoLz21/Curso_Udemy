const tecnologias = ['HTML','CSS','JAVASCRIPT','PHP','ANDROID']
const numeros = [10,20,30]

//filter

const nuevoArray = tecnologias.filter((data) => console.log(data))

console.log(nuevoArray)

//includs

const resultado0 = tecnologias.includes('CSS')

console.log(resultado0)

//sone - devuelve si el menos uno cumple con la condicion.

const resultado = numeros.some((data) => data > 15);
console.log(resultado)

//find - devuelve el primer elemento que cumple una condicion

const resultado2 = numeros.find((data) => data > 5);
console.log(resultado2)

//every - devuelve true o false si todos cumplen una condicion.

const resultado3 = numeros.every((data) => data >5);
console.log(resultado3)

//reduce - devuelve un acumulado del total

const resultado4 = numeros.reduce((total,data)=>{
    console.log(total);
    return total + data;
},0);

console.log(resultado4)
