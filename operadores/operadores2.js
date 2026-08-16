// outros operadores em javascript são os operadores de comparação, eles comparam um valor a outro e dependendo do operador utilizado, pode retornar verdadeiro ou falso, esse tipo de retorno pode ser util na logica do programar
//enfim, abaixo alguns operadores de comparação

let numero1 = 5
numero1 == 5
// o operador de igualdade(==) verificar se dois valores são iguais, se forem, retorna true, se não forem retornar false
// no caso acima, ele retornara true pos o valor de numero1 é igual a 5

let numero2 = 10
numero2 === "10"
// o operador de igualdade estrita(===) é similar a == porem alem de ver se os valores são iguais, ele tambem verificar o tipo de dado
// no caso acima, ele retornara false pos apesar de no numero2 conter o valor 10 ele esta sendo comparado com "10" que é uma string pos esta entre parentenses, não um numero igual a 10
// se fosse utilizado == no lugar de === a comparacao iria retornar true, pos ela compararia apenas os valores, nao os tipos

let numero3 = 20
numero3 != 10
// o operador de desigualdade(!=) é semelhante ao == porem ao inves de ele comparar se os valores sao iguais, ele comparar se os valores são diferentes
//no caso acima, ele retornara true pos o valor da variavel numero3 é 20 que é diferente de 10

let numero4 = 30
numero4 !== "30"
// o operador de desigualdade estrita(!==) é semelhante ao === porem ele verificar a diferença entre os valores, não a igualdade
// no caso acima, ele retornara true pos apesar da variavel numero4 conter o valor 30 ela é diferente de "30", assim uma é numero e a outra é uma string
// se fosse utilizado != no lugar de !== a comparacao iria retornar false, pos ela compararia apenas os valores, nao os tipos

let numero5 = 10
numero5 > 1
// o operador maior que(>) verificar se o valor a esquerda é maior que o valor da direita
// no caso acima, ele retonara true, pos o valor de numero5 e 10 e 10 é maior que 1

let numero6 = 10
numero6 >= 11
// o operador maior ou igual(>=) é similar ao > mas com o adicional que verificar se é igual tambem

let numero7 = 1
numero7 < 10
// o operador menor que(<) verificar se o valor a esquerda é menor que o valor da direita
// no caso acima, ele retonara true, pos o valor de numero7 e 1 e 10 é maior que 1

let numero8 = 10
numero8 <= 11
// o operador menor ou igual(<=) é similar ao < mas com o adicional que verificar se é igual tambem