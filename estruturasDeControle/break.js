// No javascript existe um comando que auxiliar as estruturas de controle, esse é o comando break
// break nada mais faz que a parada da execução de uma estrtura de controle, independente das condições ou expressoões boleanas das mesmas 
// um exemplo abaixo com a estrututura for
for(let i = 0; i < 10; i++){
    console.log(i)
    if(i == 5){
        break;
    }
}
// acima, quando i tiver o valor de 5, o bloco if sera executado e dentro desse bloco tem um break, que por sua vez, faz o laço for para de ser executado mesmo que a condição dentro do for(i < 10) não tenha retornado false para ele fazer parada