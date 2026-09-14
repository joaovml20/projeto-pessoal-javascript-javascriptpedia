// funcoes nada mais são que partes de codigos que podem ser chamados atraves de seu nome em qualquer parte do programa(dependendo do seu escopo), eles são uteis para organizar melhor o codigo do programa, por exemplo, uma função para executar uma conta numerica e outra para executar apenas mensagens, assim tornando o programar mais organizado, separando o programar em partes como um quebra-cabeça
// uma maneira de criar uma função é com o metodo de declaração de função(function declaration), para isso, deve-se iniciar com a palavra-chave function seguido pelo nome da funcão que é personalizado mas é recomendavel um nome que apresente o proposito da função, apos o nome escolhido, deve-se abrir e fechar parenteses, se caso dejesa-se que a função trabalhe com valores vindo de fora, deve-se colocar esses valores dentro do parenteses e se for com mais de um valor, separe eles com virgula, por fim, apos tudo isso, deve-se abrir e fechar chaves onde dentro das chaves, é que iram ficar os codigos que as funções iram executar
// alguns exemplos abaixo

function Apresentacao(){
    console.log('ola, bem-vindo ao programar')
}
// lembre-se que criar a funçâo não a fara executar, para ela executar deve-se chamar-la com seu nome e parenteses(se ela esperar valores vindo de fora, eles tem que esta dentro do parenteses)
Apresentacao()

let numero = 10
function Adição(numero){
    console.log(numero * 10)
}
// um outro exemplo de função, a função está sendo chamada e sendo passado valores para ela, assim ela ira trabalhar dentro de seu bloco de comandos com esses valores
Adição(numero)

function multiplicacao(numero1,numero2){
    console.log(numero1 * numero2)
}
let numero1 = 2
let numero2 = 10
// outro exemplo de função, que recebe dois valores vindo de fora e que trabalhar com esses valores dentro das chaves da função(bloco de comandos da função), que nesse caso, é a função multiplicacao
multiplicacao(numero1,numero2)