// mais alguns operadore em javascript são os operadores aritméticos
// eles nada mais fazem que executar operações mátematicas, vejamos alguns abaixo:

let numero1 = 1
console.log(numero1 + 1)
// o operador de adição(+) executar uma somar entre o valor da esquerda e da direita
// no caso acima, numero1 que armazenar 1 é somado com mais 1, logo 2 é o que sera impresso no console.log

let numero2 = 1
console.log(numero2 - 1)
// o operador de subtração(-) executar uma subtração entre o valor da esquerda e da direita
// no caso acima, numero2 que armazenar 1 é subtraido com 1, logo 0 é o que sera impresso no console.log

let numero3 = 2
console.log(numero3 * 3)
// o operador de multiplicação(*) executar uma multiplicação entre o valor da esquerda e da direita
// no caso acima, numero3 que armazenar 2 é multiplicado com 3, logo 6 é o que sera impresso no console.log

let numero4 = 2
console.log(numero4 / 2)
// o operador de divisão(/) executar uma divisão entre o valor da esquerda e da direita
// no caso acima, numero4 que armazenar 2 é dividido por 2, logo 1 é o que sera impresso no console.log

let numero5 = 3
console.log(numero5 % 2)
// o operador de Módulo ou resto da divisão(%) executar uma divisão entre o valor da esquerda e da direita porem diferente do  operador de divisão, ele retornara o resto da divisão
// no caso acima, numero5 que armazenar 3 é dividido por 2, o resultado dessa operação é 2 no entanto restar 1 e esse 1 é o que será impresso no console.log

let numero6 = 5
console.log(numero6 ** 2)
// o operador de Exponenciação(**) executar uma multiplicação entre o valor da esquerda vezes ele mesmo e a quantidade de vezes que determinara isso é o valor a direita
// no caso acima, numero6 armazenar o valor 5 que é multiplicado por ele mesmo 2 vezes, ou seja 5 * 5, onde o resultado dessa operação sera impresso no console.log

let numero7 = 1
console.log(numero7++)
console.log(numero7)

let numero8 = 1
console.log(++numero8)
console.log(numero8)

// existem os operadores de pós-incremento e pré-incremento(++), eles nada mais fazem que incrementar +1 a variavel
// a diferença entre ambos é que um somar antes de utilizar a variavel(Pré) e o outro somar apenas depois da utilização da variavel(Pós), e para utilizar o Pré-incremento bastar usar ++ antes da variavel e o Pós-incremento depois da variavel
// seguir o exemplo das variaveis acima, o numero7 utilizar o Pós-incremento onde o console log imprime primeiro o valor original da variavel e no proximo console.log, o valor da variavel ja somado. o numero8 utilizar o Pré-incremento onde o console.log ja exibir o numero original da variavel ja somado

let numero9 = 1
console.log(numero9--)
console.log(numero9)

let numero10 = 1
console.log(--numero10)
console.log(numero10)
// existem os operadores de pós-decremento e pré-decremento(--), seguem a mesma logica do pós-incremento e pré-incremento(++) com a diferença que pós-decremento e pré-decremento não somam, apenas subtrai por 1