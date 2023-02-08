const escola = "Cod3r"

console.log(escola.charAt(4))
//vai na const escola, e retorna o char presente na quarta posição.

console.log(escola.charAt(5))
//Se for inserido uma posição que não esxiste char retorna um espaço vazio

console.log(escola.charCodeAt(3))
//Retorna o código referente a tabela ascii do char na posição 3

console.log(escola.indexOf('3'))
//retorna a posição que o valor passado como parâmetro se encontra dentro da string

console.log(escola.substring(1))
//Retorna a string passada na função a partir da posição passada em diante

console.log(escola.substring(1,3))
//Retorna a string passada na função a partir da primeira posição passada até
//a segunda posição passada, mas sem inclui-la

console.log('Escola '.concat(escola).concat("!"))
//concatena literais

console.log(escola.replace(3,"e"))
//Substitui dentro da string passada, todos os "3" por "e"

console.log('Ana,Maria,Pedro'.split(','))
//Separar uma string em uma array