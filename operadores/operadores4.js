// existem os operadores bit a bit no javascript, eles trabalham diretamente com os bits ou os valores em binario dos dados
// vejamos alguns exemplos desses operadores abaixo

let numero1 =  5 << 1
// o operador bit a bit(<<) move os bits para a esquerda do valor a esquerda um determinado numero de vezes onde esse numero é determinado pelo valor a direita
// o valor a esquerda no caso acima é o numero 5 e o valor que determinara o movimento dos bits a esquerda é o valor 1
// logo ocorrera o seguinte processo: o numero 5 em bits ou melhor, em binario é 0101, movendo os bits do numero 5 uma vez para a esquerda, ficara 1010, que em binario é 10, logo 10 é o valor que sera armazenado na variavel numero1 nesse trecho de codigo:  let numero1 =  5 << 1

let numero2 = 5 >> 1
// o operador bit a bit (>>) é similar ao << porem a diferença que ele move os bits para a direita
// no trecho de codigo acima, o numero 5 ou 0101 em binario, tem seus bits movidos 1 vez para a direita, tendo o resultado 0010 que em binario é 2, logo o numero 2 é o que sera armazenado na variavel numero2 