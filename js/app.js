const privada = '75170843e5a5be95159e20f53b3e4d8a1eceb047';
const publica = 'd1c47ff48841eafb3c6f2f3783f10bf6';
const timestamp = Date.now();

//Encriptado de las llaves
const hash = md5(timestamp + privada + publica);
const previousButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');

let offset = 0;

console.log(hash);

const fetchData = () => {
    const url = `https://gateway.marvel.com/v1/public/comics?limit=20&offset=${offset}&ts=${timestamp}&apikey=${publica}&hash=${hash}`;

    fetch(url)
    .then(response => response.json())
    .then(obj => imprimir(obj.data.results))
    .catch(error => console.error(error))
}

fetchData();

previousButton.addEventListener('click', () =>{
    offset -= 20;
    fetchData();
})

nextButton.addEventListener('click', () =>{
    offset += 20;
    fetchData();
})

const getId = id => {
    const url = `https://gateway.marvel.com/v1/public/comics/${id}?ts=${timestamp}&apikey=${publica}&hash=${hash}`;
    fetch(url)
        .then(resp => resp.json())
        .then(obj => printDetailComic(obj.data.results))
}