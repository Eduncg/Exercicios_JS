//funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3) //tudo certo
imprimirSoma(2)  //funciona porém como B não foi passado usa undefined e retorna NaN

function soma(a, b=0)//define um valor padrão para um dos parãmetros 
{  
return a + b;
}

console.log(soma(2))

