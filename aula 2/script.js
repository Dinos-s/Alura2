function Converter(){
    var valorElemento = document.getElementById('valor')
    var valor = (valorElemento.value);
    var valorEmDolar = parseFloat(valor);

    var valorEmReal = valorEmDolar * 5;
    console.log(valorEmReal);

    var elementoValorConverter = document.getElementById("valorConvertido");
    var  valorConvertido = `O valor em real é R$${valorEmReal}`;
    elementoValorConverter.innerHTML = valorConvertido;
}