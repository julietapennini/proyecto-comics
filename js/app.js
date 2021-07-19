const privada = '75170843e5a5be95159e20f53b3e4d8a1eceb047';
const publica = 'd1c47ff48841eafb3c6f2f3783f10bf6';
const timestamp = Date.now();

//Encriptado de las llaves
const hash = md5(timestamp + privada + publica);

console.log(hash);

const url = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publica}&hash=${hash}`;

const imprimirData = arr => {
    console.log(arr)
}

fetch(url)
.then(response => response.json())
.then(obj => imprimirData(obj.data.results))
.catch(error => console.error(error))