const obj = {a:1, b:2, c:3, soma(){ return a + b + c } }//Objeto criado
console.log(JSON.stringify(obj))//Transformando JSON em objeto

console.log(JSON.parse('"a": 1.7, "b": "string", "c": true, "d" :{}}'))// transformando obj em JSON

//JSON é um formato de dados, meramente textual