const saudacao = 'Opa' //contexto léxico 1

function exec() {
    const saudacao = 'Faalaa' //contexto léxico 2
    return saudacao
}

//objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 70,
    endereco: {
         rua: 'top',
         numero:23
     }
}

console.log(saudacao) //imprime o valor do escopo geral
console.log(exec()) // imprime o valor do escopo da função
console.log(cliente)