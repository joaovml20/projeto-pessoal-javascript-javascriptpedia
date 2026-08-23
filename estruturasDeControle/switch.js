// no javascript existe a estrutura switch, essa estrutura de controle executar um bloco de comandos entre varios aparti de valores

let numero = 7
// o switch começa recebendo um valor que esta entre parenteses logo apos ele, que no caso abaixo é a variavel numero que contem o valor 7, e com esse valor, ele ira trabalhar 
switch(numero){
    // dentro do switch, existem os casos(cases), eles sao executados quando o valor da expressão recebido pelo switch for igual ao do caso
    // como o switch recebeu o valor 7 e nesse caso trabalhar com o valor 1, ele não sera executado
    case 1:
        console.log('é o numero Um')
        //o break é crucial entre os casos, sempre os coloque no final, pos ele quebraram o fluxo do programar para não executar os casos apos ele, sem ele, o case apos esse tambem seria executado
        break;
    case 2:
        console.log('é o numero Um')
        break;
    case 3:
        console.log('é o numero Um')
        break;
    case 4:
        console.log('é o numero Um')
        break;
    case 5:
        console.log('é o numero Um')
        break;
    case 6:
        console.log('é o numero Um')
        break;
    //enfim, o case entre varios que sera executado pos a expressão que o switch recebeu retornar é 7, e esse case sera executado quando o valor da expressão for 7
    case 7:
        console.log('é o numero Um')
        break;
    case 8:
        console.log('é o numero Um')
        break;
    case 9:
        console.log('é o numero Um')
        break;
    case 10:
        console.log('é o numero Um')
        break;
    // o case default é o case que sera executado quando nenhum dos cases anteriores com valores for executado
    default:
        console.log('Numero não é entre 1 e 10')
}