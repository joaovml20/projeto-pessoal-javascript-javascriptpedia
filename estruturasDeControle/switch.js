// no javascript existe a estrutura switch, essa estrutura de controle condicional
// executar um bloco de comandos entre vários aparti de valores

let numero = 7
// o switch começa recebendo um valor que esta entre parenteses logo após ele, que no caso abaixo é a variavel
// numero que contem o valor 7, e com esse valor, ele ira trabalhar
switch(numero){
    // dentro do switch, existem os casos(cases), eles são executados quando o valor da expressão recebido pelo
    // switch for igual ao do caso
    // como o switch recebeu o valor 7 e nesse caso trabalhar com o valor 1, ele não será executado
    case 1:
        console.log('é o numero Um')
        //o break é crucial entre os casos, sempre os coloque no final, pos ele quebrara o fluxo do programar
        // para não executar os casos após ele, sem ele, se o caso 1 fosse executado o case após ele
        // (case 2) tambem seria executado
        break;
    case 2:
        console.log('é o numero Dois')
        break;
    case 3:
        console.log('é o numero Três')
        break;
    case 4:
        console.log('é o numero Quatro')
        break;
    case 5:
        console.log('é o numero Cinco')
        break;
    case 6:
        console.log('é o numero Seis')
        break;
    //enfim, o case entre vários que será executado pos a expressão que o switch recebeu retornar é 7
    // e esse case será executado quando o valor da expressão for 7
    case 7:
        console.log('é o numero Sete')
        break;
    case 8:
        console.log('é o numero Oito')
        break;
    case 9:
        console.log('é o numero Nove')
        break;
    case 10:
        console.log('é o numero 10')
        break;
    // o case default é o case que será executado quando nenhum dos cases anteriores com valores for executado
    default:
        console.log('Numero não é entre 1 e 10')
}