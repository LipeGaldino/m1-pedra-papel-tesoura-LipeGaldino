/* Desenvolva seu código abaixo */
function playRockPaperScissor(player1, player2){
    let pedra = "Pedra"
    let papel = "Papel"
    let tesoura = "Tesoura"

    if (player1 == player2){
        return "Empate!"
    }else if ((player1 == pedra && player2 == tesoura) || (player1== papel && player2 == pedra) || (player1 == tesoura && player2 == papel)){
        return "Jogador 1 venceu!"
    }else{
        return "Jogador 2 venceu!"
    }
}
