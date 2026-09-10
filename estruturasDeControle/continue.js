// No javascript existe um comando que auxiliar as estruturas de controle, esse é o comando continue
// o continue tem a função de ignorar os comandos abaixo dele em determinada estrutura de controle, principalmente as do tipo repetição
// um exemplo abaixo
for(let i = 0; i < 10; i++){
    if(i == 5){
        continue;
    }
     console.log(i)
}
// No exemplo acima, quando a iteração(repetição) do for executar o if, ele ignorara os comandos abaixo e pulara para a proxima repetição, nesse caso, console.log ira imprimir o valor de i quando ele for de 0 a 9 exceto quando ele for 5, pos quando ele for 5, é que executara o if e ignorara o console.log abaixo do if e vai partindo para a proxima repetição onde i ja tera o valor de 6 