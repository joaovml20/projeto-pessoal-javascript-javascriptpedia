// funcoes nada mais são que partes de codigos que podem ser chamados atraves
// de seu nome em qualquer parte do programa(dependendo do seu escopo), eles são uteis
// para organizar melhor o codigo do programa, por exemplo
// uma função para executar uma conta numerica e outra para executar apenas mensagens
// assim tornando o programar mais organizado, separando o programar em partes como um quebra-cabeça
// uma maneira de criar uma função é com o metodo de declaração de função(function declaration)
// para isso, deve-se iniciar com a palavra-chave function seguido pelo nome da funcão
// que é personalizado mas é recomendavel um nome que apresente o proposito da função
// apos o nome escolhido, deve-se abrir e fechar parenteses, se caso dejesa-se que a função
// trabalhe com valores vindo de fora, deve-se colocar esses valores dentro do parenteses
// e se for com mais de um valor, separe eles com virgula, por fim
// apos tudo isso, deve-se abrir e fechar chaves onde dentro das chaves
// é onde ira ficar os codigos que as funções iram executar ou retorna com a palavra-chave return
// lembrete que as variaveis entre parenteses nas funções e declaradas dentro das funções
// tem seus escopos apenas dentro da função, não sendo acessivel fora dela, lembre-se tambem
// que esse metodo sofre hoisting, ou seja, ela pode ser chamada antes de ser definida no código
// alguns exemplos abaixo

function Apresentacao(){
    console.log('ola, bem-vindo ao programar')
}
// lembre-se que criar a funçâo não a fara executar, para ela executar deve-se chamá-la
// com o seu nome e parenteses(se ela esperar valores vindo de fora, eles têm que esta dentro do parenteses)
Apresentacao()

let numero = 10
function Adicao(numero){
    console.log(numero + 10)
}
// Outro exemplo de função, a função está sendo chamada e sendo passado valores para ela
// assim ela ira trabalhar dentro do seu bloco de comandos com esses valores
Adicao(numero)

function multiplicacao(numero1,numero2){
    console.log(numero1 * numero2)
}
let numero1 = 2
let numero2 = 10
// outro exemplo de função, que recebe dois valores vindo de fora e que trabalhar com esses valores
// dentro das chaves da função(bloco de comandos da função), que nesse caso, é a função multiplicacao
multiplicacao(numero1,numero2)

// outro exemplo de função, dessa vez ela retorna um valor a uma variavel
// lembre-se que a palavra-chave return fara que a função ira retorna o valor a direita dela
// quando chamada, nesse caso, resultado
// note tambem que as variaveis dentro da funcão divisao é diferente das variaveis da função multiplicacao
// que esta acima, pos apesar da assimilaridade do nome, elas têm escopo diferentes
function divisao(numero1,numero2){
    let resultado; // variavel que so existe dentro da função
    resultado = numero1 / numero2
    return resultado // o que a função ira retorna ao ser chamada e a encerrara
}
let numero3 = 10
let numero4 = 5
let resultado = divisao(numero3,numero4)
// numero1 e numero2 dentro da função divisao iram receber os valores da variavel numero3 e numero4
// respetivamente, a função divisao ira trabalhar com esses valores e ira retorna o resultado
// para a variavel resultado
console.log(resultado)