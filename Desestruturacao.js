const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'rua nao',
        numero: 1000
    }
}

//extraindo atributos de um objeto e salvando em constantes

const {nome, idade} = pessoa

const {nome: n, idade: i} = pessoa // salvando em uma constante específica criada pelo usuário