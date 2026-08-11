// javascript é dinamicamente tipado, isso significar que uma variavel contendo um texto pode mudar para armazenar um numero ou vice-versa, um exemplo abaixo
let variavel = 'ola mundo'
variavel = 10
// por conta disso, o javascript pode cometer uma conversão implícita de variaveis
// que nada mais é quando o programar trabalhar com tipos de dados diferentes, o javascript tentar
// converter para o tipo de dado mais adequado para facilitar o trabalho, um exemplo abaixo
let numero1 = 10
let texto1 = "ola mundo"
console.log(numero1 + texto1)
//no exemplo acima, o javascript vai converter a variavel numero1 para texto e juntar o texto com a variavel texto1
// dando a saida no console.log de "ola mundo10", ou seja, uma concatenação
// outro caso de conversao implícita abaixo
let numero2 = 10
let texto2 = "10"
console.log(numero2 + texto2)
//no exemplo acima, o javascript vai converter a variavel texto2 para numero e somar com a variavel numero2
// dando saida no console.log de 20
// essas conversões implícitas podem gerar erros em algum momemto do programar se não for usado corretamente
//por isso, as vezes é bom usar conversões explícitas,ou seja, metodos que transformam a variavel no tipo de dado adequado para o trabalho
// alguns exemplos abaixo
let texto3 = "10"
let numero3 = parseInt(texto3)
//o comando parseInt ou metodo parseInt serve para converter um dado de texto para dado numero sem ponto flutuante, tambem chamado inteiro, no exemplo acima, texto3 é convertido para numero e passado para numero3 como valor
let texto4 = "3.14"
let numero4 = parseFloat(texto4)
//o comando parseFloat ou metodo parseFloat é simular a parseInt porem ele converte para um dado numero com ponto flutuante, tambem chamado de float
let numero5 = 101
let texto5 = String(numero5)
// o metodo String converte um dado para texto, no exemplo acima, ele é usado para converter 101 de numero5 para texto e guardado na variavel texto5