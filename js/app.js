document.addEventListener('DOMContentLoaded', () => {
    console.log('Javascript loaded');

    const newBottle = document.querySelector('#add-new-wine');
    newBottle.addEventListener('submit', addWineToWineRack);

    const emptyWineRack = document.querySelector('#empty-wine-rack');
    emptyWineRack.addEventListener('click', drinkAllTheWine);
});

const addWineToWineRack = function(event) {
    event.preventDefault();

    const newWine = createWine(event.target);

    const wineRack = document.querySelector('ul');
    wineRack.appendChild(newWine);

    event.target.reset();
};

const createWine = function (form) {
    const name = form.name.value;
    const country = form.country.value;
    const region = form.region.value;
    const type = form.type.value;

    const newWine = document.createElement('li');
    newWine.classList.add('wine');

    const wineName = document.createElement('h2');
    wineName.textContent = name;
    newWine.append(wineName);

    const wineCountry = document.createElement('h3');
    wineCountry.textContent = country;
    newWine.append(wineCountry);

    const wineRegion = document.createElement('p');
    wineRegion.textContent = region;
    newWine.append(wineRegion);

    const wineType = document.createElement('p');
    wineType.textContent = type;
    newWine.appendChild(wineType);

    return newWine;
}

const drinkAllTheWine = function (event) {
    const rackContents = document.querySelector('ul');
    rackContents.innerHTML = '';
}


