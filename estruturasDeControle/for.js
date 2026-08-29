// No javascript existem as estruturas de controle de repetição, uma delas é o for, o laço for
// a estrutura for tem 4 partes, a inicialização, a condição, o incremento ou decremento e por fim o bloco de codigos que sera repetido
// a inicialização é a variavel contadora do for, essa variavel pode ser tanto declarada dentro do for como fora dele, se for declarada dentro da estrutura for, a variavel tem o escopo da estrtutra for
// a condição é a expressão boleana que enquanto retorna verdadeiro, o bloco de comandos do for continuara repetindo
// o incremento ou decremento é a adição ou subtração da variavel contadora a cada repetição do bloco de comandos do for
// um exemplo abaixo
for(let i = 0; i < 10; i++){
    console.log(i)
}
// onde acima, a inicialização é o let i = 0, a condição é i < 10, o incremento é i++, perceber que eles estão separados por ponto e virgula, e por fim o bloco de comandos que executar o console.log com o valor da variavel contadora
// ao executar esse codigo, note que i que é a variavel contadora, começa com 0(parte da inicialização), e a cada repetição ela vai ganhando +1 gracas a i++(parte do incremento), por fim ela terminar quando a parte da condição retorna false( i < 10), ou seja, quando i for maior que 10, a estrutura for para

//tome cuidado com laços infinitos, um exemplo abaixo
for(let i = 0; i < 10;){
    console.log(i)
}
// no caso acima, por mais que exista a parte da condição do for, não existe a parte do incremento, assim fazendo o for rodar infinitamente