// let listsFilm = ["https://img.elo7.com.br/product/zoom/2A26947/quadro-jurassic-park-tamanho-35x25-cm-com-vidro-jurassic-park.jpg", "https://media.fstatic.com/5VZxqaxM7ocPfHGtxnjIvfQbqS0=/210x312/smart/media/movies/covers/2011/04/26fc38aa3dd5ae51e835d8ab277bd34b.jpg", "https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg"];

// for (let i = 0; i < listsFilm.length; i++) {
//     document.write("<img src=" + listsFilm[i] + ">")
// }

function AddFilm() {
    let campoFilme = document.getElementById('filme').value;
    if (campoFilme.endsWith(".jpg")) {
        ListarFilmes(campoFilme);
    } else{

    }
    document.getElementById('filme').value = "";
}

function ListarFilmes(filme) {
    let elementoFilmeFav = "<img src=" + filme + ">";
    var listaFilme = document.getElementById('listaFilmes');

    listaFilme.innerHTML = listaFilme.innerHTML + elementoFilmeFav;
}