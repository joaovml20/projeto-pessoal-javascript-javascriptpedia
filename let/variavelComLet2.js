//existe o chamado escopo de variaveis onde dependendo de onde a variavel foi declarada
//ela pode ser acessivel ou não
//um exemplo abaixo
let variavel1 = "sou global"

function funcaoExemplo(){
    let variavel2 = "sou local"
}
// a variavel1 tem seu escopo global ja que foi declarada fora de qualquer funcao
// ou seja, ela é acessivel em qualquer lugar do programar
// diferente da variavel2 que foi declarada dentro de uma funçao, logo, apenas aquela funcao e seus
// respectivos codigos dentro dela, tem acesso aquela variavel