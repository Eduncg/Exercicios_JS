function  rand({min = 0, max = 1000}){ //criando função random com valores padrões pré-setados
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

const obj = {max : 50, min: 40} 
console.log(rand(obj)) // passando objeto como parâmetro e com valores diferentes dos padrões
console.log(rand({ min:95 }))// é possível passar apenas um dos limnites, nesse caso o inferior
console.log(rand({}))// Se nenhum limite for passado, são usado os padrões
console.log(rand())