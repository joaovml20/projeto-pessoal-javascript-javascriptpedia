// algo que acontece no javascript é a elevacao ou hoisting de variaveis
// as variaveis no javascript podem ser acessadas antes de serem declaradas no programar
// isso porque quando o script é carregado, o javascript move as declaracoes de variaveis para o topo do programar
//mas apenas as declaracoes vao para o topo, a atribuicao de valor continuar na linha do programar que elas recebem valor
//um exemplo abaixo:
console.log(x)
var x = 'ola mundo'
console.log(x)
// no primeiro console.log, apenas o valor undefined sera impresso, agora no segundo console.log
//sera executado 'ola mundo' normalmente, pos a variavel x nesse momento no programar, ja recebeu valor
// isso so acontece com variaveis declaradas com var, com let e const o hoisting nao funcionar
// assim elas so podem ser usadas depois de serem declaradas