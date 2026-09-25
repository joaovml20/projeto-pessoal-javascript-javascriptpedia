// algumas funcionalidades de funções são os valores padrões
// são úteis quando se esperar uma passagem de parâmetro quando a função é chamada porem nâo teve essa passagem
// para a função copia o valor e trabalhar com a cópia dentro do seu bloco de comandos
// um exemplo abaixo
function apresentacao(nome = 'viajante'){
    console.log(`bem-vindo ${nome}`);
}
apresentacao();
apresentacao('bia')
// acima, na primeira chamada da função apresentacao, será exibido "bem-vindo viajante"
// enquanto na segunda chamada será exibido "bem-vindo bia"
// justamente por que na primeira chamada não teve passagem de parâmetros então foi assumido o valor padrão
// da função('viajante') para trabalhar com o resto do código sem valores faltando