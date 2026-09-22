// existe uma terceira forma de declarar funções no javascript, as chamadas funções de setas(arrow functions)
// essa é a forma mais usada de declarar funções no javascript
// para criar uma arrow function, usa-se seta(=>) para separar os parâmetros e o bloco de códigos da função
// um exemplo abaixo
const ola = () => console.log("ola mundo")
ola()
// acima esta a variável ola que recebe uma arrow function sem parâmetros, apenas executar um console.log
// chamada logo em seguida pelo nome da variável cujo ela foi atribuída como valor
// note como não foi necessário chaves para expressar o bloco de comandos, só seria necessário se a função
// executar-se mais linhas de código, como abaixo
const apresentacao = (nome) => {
    console.log(`ola ${nome} , bem-vindo ao programar`)
    console.log('É um prazer ter-lo aqui')
}
apresentacao('rei')
// note como a função acima executar dois console.log, logo a uma necessidade de deixar explicito o bloco de comandos
// com as chaves({})
// note também como essa função recebe parâmetro, diferente da anterior

// expressões com arrow functions também podem ter um retorno implícito se o único propósito da função é retorna algo
// um exemplo abaixo
const quadrado = x => x * x;
let numero = 10
console.log(`O quadrado do numero ${numero} é ${quadrado(numero)}`)
// a variável quadrado recebe uma arrow function que apenas multiplicar um número, logo quando ela é chamada no
// console.log, ela apenas retorna o valor da multiplição, sem a necessidade de ter a palavra-chave return no
// seu bloco de comando
// note também que como a arrow function está a receber apenas um único parâmetro, não a necessidade de parênteses
// so seria necessário caso se houve mais parâmetros para ser passado para a função