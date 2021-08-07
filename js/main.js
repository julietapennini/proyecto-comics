const root = document.getElementById('root')

const imprimir = arr => {
    const pathNonFoundNowanted = "https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available";
    const pathNonFoundWanted = "https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_uncanny";
    let card = '';

    arr.forEach(comic => {
        const {title, thumbnail:{extension, path}, id} = comic;
        card += `<div class="column is-one-fifth" onclick="getId(${id})">
        <figure>
          <a>
          <img src="${path === pathNonFoundNowanted ? pathNonFoundWanted : path}.${extension}" alt="${title}">
          <p>${title}</p>
          </a>
        </figure>
        </div>`
    });
    root.innerHTML = card
} 


const printDetailComic = arr => {
    let card = '';
    arr.forEach(comic => {
        const {thumbnail: {extension, path}, title, description, dates, creators } = comic;
        const releaseDate = new Intl.DateTimeFormat('es-AR').format(new Date(dates?.find(el => el.type === 'onsaleDate').date))
        const writer = creators?.items?.filter(el => el.role === 'writer')
        card +=
            `<div class="columns">
                <div class="column is-one-quarter">
                <figure class="img-detail">
                <img src="${path}.${extension}" alt="${title}">
                </figure>
                </div>
                <div class="column">
                    <h3>${title}</h3>
                    <h4>Publicado:</h4>
                    <p>${releaseDate}</p>
                    <h4>Guionistas:</h4>
                    <p>${writer ? writer[0].name : 'Sin informacion'}</p>
                    <h4>Descripción:</h4>
                    <p>${description}</p>
                    <button onclick="fetchData()">Regresar</button>
                </div>
            </div>` 
    })
    console.log(arr);
    root.innerHTML = card
}