function tratarErro(erro){
    throw "Um Erro inesperado ocorreu" // Envia um objeto/string/number para tela
}

function imprimirNome(obj){
try {//Bloco de código que irá ser executado e caso ocorra erro passa para o catch
    console.log(obj.name.toUpperCase())
}
catch(e){ // captura o erro
    tratarErro(e)
}
}
const obj = {name: "roberto"}
imprimirNome(obj)