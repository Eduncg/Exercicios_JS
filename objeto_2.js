console.log(typeof Object) // função
console.log(typeof new Object) //

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {} // ES2015 (E56)
console.log(typeof Produto) 

// Ao se criar um objeto de forma literal ele já é estanciado
//Mas também é possível criar instâncias de outras formas como essas a cima