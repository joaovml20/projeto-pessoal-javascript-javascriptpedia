// funcoes nada mais são que partes de codigos que podem ser chamados atraves
// do seu nome em qualquer parte do programa(dependendo do seu escopo), eles são uteis para
// organizar melhor o codigo do programa, por exemplo
// uma função para executar uma conta numerica e outra para executar apenas mensagens
// assim tornando o programar mais organizado, separando o programar em partes como
// um quebra-cabeça
// uma outra maneira de declarar funcoes é com o metodo de Expressão de funções(function express)
// ela é semelhante ao function declaration, porem é associada a uma variavel e não sofre
// hoisting, tambem não é mais necessario um nome para chamá-la já que ela vai assumir
// o nome da variavel assim sendo apenas necessario passar como valor a variavel o seguinte:
// a palavra-chave function e parenteses(com os valores dentro dela se tiver) e o bloco de comandos
// exemplo abaixo:
const somar = function(a, b) {
    return a + b;
};

console.log(somar(2, 3));
// a variavel somar que está associado a uma função, ira receber os valores 2 e 3
// que corresponderam a e b respetivamente e ira fazer o tratamento dentro do bloco de comandos
// que nesse caso, é soma os dois valores e retorna ao programar, que por fim
// console.log ira receber esse retorno e ira imprimir