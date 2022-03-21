var numScret = parseInt(Math.random() * 11);

function Chutar() {
    var result = document.getElementById('resultado');
    var chute = parseInt(document.getElementById('valor').value);
    console.log(numScret);
    
    if (chute == numScret) {
        result.innerHTML = 'Você acertou'
    } else if(chute < 0 || chute > 10) {
        result.innerHTML = 'Você deve digitar um número de 0 a 10'
    } else {
        result.innerHTML = `Errou, Onumero era ${numScret}`
    }
}