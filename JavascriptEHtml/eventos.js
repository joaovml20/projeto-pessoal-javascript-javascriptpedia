// este arquivo trabalhará com o arquivo index4.html
// atuando como javascript externo

// no javascript existe algo chamado de eventos, eles fornecem
// a manipulação de acões do usuário como cliques, movimentos do mouse
// pressionamentos de teclas, e muito mais
// um exemplo abaixo:
function apertaBotao(){
    alert('você apertou o botão')
}
const botao = document.getElementById('botao')
botao.onclick = apertaBotao();