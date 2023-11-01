let saldoVitoria = ranked(200, 100)
function ranked(vitoria, derrota){
        let saldoVitoria = vitoria - derrota
    return saldoVitoria          
}
if(saldoVitoria <= 10){
    ranked = "Ferro"
}
else if(saldoVitoria >=11 && saldoVitoria <=20){
    ranked = "Bronze"
}
else if(saldoVitoria >= 21 && saldoVitoria <= 50){
    ranked = "Prata"
}
else if(saldoVitoria >= 51 && saldoVitoria <= 80){
    ranked = "Ouro"
}
else if(saldoVitoria >= 81 && saldoVitoria <= 90){
    ranked = "Diamante"
}
else if(saldoVitoria >= 91 && saldoVitoria <= 100){
    ranked = "Lendário"
}
else if(saldoVitoria >= 101){
    ranked = "Imortal"
}

console.log("O Heroi tem de saldo de " + ranked + " está no nível de " + saldoVitoria)