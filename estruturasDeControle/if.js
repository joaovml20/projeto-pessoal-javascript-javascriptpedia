// No javascript existem as estruturas de controle, elas trabalham com os valores booleanos, true e false e ajudam no fluxo do programar
// Algumas dessas estruturas logo abaixo

let numero = 10
if(numero > 0){
    console.log('É um numero positivo')
}
//acima a estrutura de controle se(if), ela executar um determinado bloco de comandos(o que esta entre chaves({}) ) se a expressao entre parentenses for true, caso for false, ela não sera executada
// no caso acima, a espressão é numero > 0 que retorna true, logo o que esta entre parentenses sera executado que nesse caso, é o console.log

numero = -1
if(numero > 0){
    console.log('É um numero positivo')
} else {
    console.log('É um numero Negativo')
}
// acima a estrutura de controle if-else, ela é semelhante a estrututura if porem com um adicional do else, o else é o que sera executado quando a expressão for falsa
// no caso acima, como a expressão entre parentenses(numero > 0) retorna false, o bloco de comandos if não sera executado, sera executado o bloco de comandos do else

//existem tambem a possibilidade de executar um if apos um else, como abaixo
numero = 0
if(numero > 0){
    console.log('É um numero positivo')
} else if(numero == 0) {
    console.log('Zero')
} else {
    console.log('É um numero Negativo')
}
// apos o primeiro else tem um if, que testar uma expressão e se retorna true, executar o bloco de comandos dele, se nao, seguir em frente, partindo para o segundo else que por sua vez não tem um if, logo o fim da estruturar terminar ali