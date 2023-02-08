var numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)
//Variáveis let tem um escopo a mais, sendo ele de bloco
//Preferencialmente busca a variável dentro do mesmo bloco
//Se não encontrar busca do lado de fora