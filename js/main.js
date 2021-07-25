const root = document.getElementById('root')

const imprimir = arr => {
    const pathNonFoundNowanted = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available";
    const pathNonFoundWanted = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_uncanny";
    let card = '';
    arr.forEach(comic => {
        console.log(comic);
        const {title, thumbnail:{extension, path}} = comic;
        card += `<div class="column is-one-fifth">
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

