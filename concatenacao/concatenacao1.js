// em javascript é possivel juntar dados em uma expressao, por exemplo, executar uma saida de dados com dois dados de duas variaveis, como abaixo:
let variavel1 = "mensagem "
let variavel2 = 10
console.log(variavel1 + variavel2)
// a saida do comando acima atraves da expressao "variavel1 + variavel2" sera "mensagem 10"
// pos o javascript converte a variavel2 para texto(string) e entao juntar as duas na saida
// esse processo de juntar dados, se chama concatenacao

// existe outros meios de concatenar dados no javascript alem do operador "+" seguir alguns exemplos abaixo
let saudacao = "boas vindas"
let usuario = "usuario01"
console.log(`${saudacao} ao ${usuario}`)
// a saida do programar acima sera "boas vindas ao usuario01" pos ocorreu concatenacao atraves dos templates literals(``)
//tudo entre os templates literals(``) sera concatenado e para exibir um valor de uma variavel, basta colocar a variavel entre cifrao($) e chaves {}, como no exemplo acima: ${saudacao}

// outra maneira de fazer uma concatenacao é com o metodo concat, vejamos logo abaixo
let mensagem = "bem-vindo"
let pessoa = "usuario02"
let mensagemParaUsuario = mensagem.concat(", ",pessoa,"!")
console.log(mensagemParaUsuario)
// a saida acima sera "bem-vindo, usuario02!" pos ocorre uma concatenacao com concat
// concat faz a uniao do valor ja atrubuido a variavel mensagem("bem-vindo") com o ",", o valor da variavel pessoa("usuario02") e "!" e assim com essa uniao, é passado como valor para a variavel mensagemParaUsuario armazenar