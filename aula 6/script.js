var player = {nome: "GMR", vitorias:2, empates:5, derrotas: 10, pontos: 15}

function calcularPonto(player) {
    var pontos = (player.vitorias * 3) + player.empates
    return pontos
}

player.pontos = calcularPonto(player)

var jogadores = [player]

function exibirJogadores(jogadores){
    var elemento = ""
    for (var i = 0; i < jogadores.length; i++) {
        elemento += "<tr><td>" + jogadores[i].nome + "</td>"
        elemento += "<td>" + jogadores[i].vitorias + "</td>"
        elemento += "<td>" + jogadores[i].derrotas + "</td>"
        elemento += "<td>" + jogadores[i].empates + "</td>"
        elemento += "<td>" + jogadores[i].pontos + "</td>"
        elemento += "<td><button onClick='AddVictory("+ i +")'>Vitoria</button></td>"
        elemento += "<td><button onClick='AddEmpate("+ i +")'>Empates</button></td>"
        elemento += "<td><button onClick='AddFails("+ i +")'>Derrota</button></td>"
        elemento += "</tr>"
    }

    var tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = elemento
}

function AddVictory(i) {
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calcularPonto(player)
    exibirJogadores(jogadores)
}

function AddEmpate(i) {
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calcularPonto(player)
    exibirJogadores(jogadores)
}

function AddFails(i){
    var jogador = jogadores[i]
    jogador.derrotas++
    exibirJogadores(jogadores)
}