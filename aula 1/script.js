function media() {
    let aluno = document.getElementById('nome').value; 
    let n1 = document.getElementById('1BI')
    let n2 = document.getElementById('2BI')
    let n3 = document.getElementById('3BI')
    let n4 = document.getElementById('4BI')
    let Total = document.getElementById('resultado')

    
    let nb1 = Number(n1.value)
    let nb2 = Number(n2.value)
    let nb3 = Number(n3.value)
    let nb4 = Number(n4.value)

    let nbF = (nb1 + nb2 + nb3 + nb4) / 4
    Total.innerHTML=''
    let item = document.createElement('option')
    item.text = `${aluno}, ${nbF}` 
    //item.value = `${aluno}, ${nbF}`
    Total.appendChild(item)
}

// var n1 = 5
// var n2 = 8
// var n3 = 5
// var n4 = 5

// var notafinal = (n1 + n2 + n3 + n4) / 4

// var notaFixada = notafinal.toFixed(1) 