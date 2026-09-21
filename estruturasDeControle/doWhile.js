// No javascript existe a estrutura de controle do tipo repetição do-while
// Essa estrutura tem duas partes, a parte do "do" que é o bloco de comandos a ser repetido e a
// parte do while que é a condição ou expressão que trabalha com valores booleanos
// um exemplo abaixo
let numero = 1
do{
    console.log(numero)
    numero++
} while(numero < 10);
// no exemplo acima, será impresso o valor da variavel numero, até que a condição(numero < 10)
// seja falsa, note como é necessario um incremento(numero++) no bloco de comandos, sem esse
// incremento, a estrutura entraria em um loop infinito

// a diferença da estrutura do-while para a estrutura while, é que a estrutura do-while
// executara o bloco de comandos pelo menos uma vez, já que ela verificar a condição por último
// diferente de while