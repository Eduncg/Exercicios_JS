const funcs =[]

for (var i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i)

    })
  
}

funcs[2]()
funcs[8]()

//resultado é 10 para todas as chamdas pois n possui escopo de função
