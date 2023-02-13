console.log(Math.ceil(6.1)) //Arredonda pra cima

const obj1 = {}
obj1.nome = 'Bola' //Criando dinamicamente um atributo de um objeto usando notacao ponto

function Obj (nome) {
    this.nome = nome
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')