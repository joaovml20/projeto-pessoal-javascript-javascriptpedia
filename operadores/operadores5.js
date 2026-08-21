// No javascript existem os operadores lógicos, eles trabalham com valores booleanos, ou seja, true e false, se preferir, verdadeiro e falso
// algumas expressões booleanas com esses operadores logo abaixo

let booleano1 = true
let booleano2 = false
console.log(booleano1 && booleano2)
// acima o operador AND(&&), ele retornara true/verdadeiro quando tanto o valor a esquerda como o da direita ser true, em qualquer outro caso, ele retornara false/falso
// no caso acima, como a variavel booleano2 tem o valor de false, sera retornado false e sera impresso com o console.log

let booleano3 = true
let booleano4 = false
console.log(booleano3 || booleano4)
// acima o operador OR(||), ele trabalha com os valoes da esquerda e da direita, retornara true caso algum dos valores for true
// no caso acima, como uma das variaveis tem como valor true, sera retornado true e sera impresso no console.log

let booleano5 = true
console.log(!booleano5)
// acima o operador NOT(!), a função dele é inverter o valor booleano, true para false e false para true
// no caso acima, a variavel booleano5 tem o valor true porem por conta do operador not(!), sera retornado false que sera impresso no console.log

let numero1 = 10
let numero2 = 20
let maiorNumero = (numero1 > numero2) ? numero1 : numero2
// acima o operador ternário(?), a função dele é separar a execução de um determinado bloco de comando quando determinada expressão for true ou false
// no caso acima, a expressão é (numero1 > numero2) e o bloco de comando quando for true ficar entre o operador ternário(?) e os dois pontos(:), ou seja, numero1, enquanto o bloco de comandos para quando a expressão for false ficar depois dos dois pontos, ou seja, numero2
// como nesse caso a expressão retornara false, o bloco a ser executado sera numero2, que por sua vez é o que sera armazenado na variavel maiorNumero
