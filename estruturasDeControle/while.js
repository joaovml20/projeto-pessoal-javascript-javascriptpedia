// No javascript existe a estrutura de controle do tipo repetição, o while
// a estrutura while tem duas partes, a condição ou expressão e o bloco de comandos
// na parte da condição ou expressâo, enquanto for retornado true, a segunda parte que é o bloco de comandos, será repetida até que a condição seja false
// um exemplo dessa estrutura logo abaixo
let contador = 0;
while(contador < 10){
    console.log(`O valor de contador é ${contador}`)
    contador++
}
// no exemplo acima, console.log sera executado até que a expressão(contador < 10) seja falsa
// note como é necessario o incremento(contador++) na estrutura, se não tivesse esse incremento, a expressão continuaria sendo true fazendo o while executa infinitamente, se tornando um loop infinito