// algo que acontece no javascript é a elevacao ou hoisting de variaveis e outras estruturas
// como funções
// as variaveis ou fuções no javascript podem ser acessadas antes de serem declaradas no programar
// isso porque quando o ‘script’ é carregado, o javascript move as declaracoes de variaveis
// para o topo do programar,
// mas apenas as declaracoes vão para o topo, a atribuicao de valor continuar na linha do programar
// que elas recebem valor
// um exemplo abaixo:
console.log(x)
var x = 'ola mundo'
console.log(x)
// no primeiro console.log, apenas o valor undefined será impresso, agora no segundo console.log
// será executado 'ola mundo' normalmente, pos a variavel x nesse momento no programar
// já recebeu valor
// isso so acontece com variaveis declaradas com var, com let e const o hoisting não funcionar
// assim elas podem-so ser usadas após serem declaradas