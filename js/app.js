document.addEventListener('DOMContentLoaded', () => {
    console.log('Javascript loaded');

    const newBottle = document.querySelector('#add-new-wine');
    newBottle.addEventListener('submit', addWineToWineRack);
});

const addWineToWineRack = function(event) {
    event.preventDefault();
    // console.log('🍷🍷🍷');
    const name = event.target.name.value
    const country = event.target.country.value
    const region = event.target.region.value
    const type = event.target.type.value

    const newWine = document.createElement('li');
    newWine.innerHTML = `
    <h2>${name}</h2>
    <h3>${country}</h3>
    <p>${region}</p>
    <p>${type}</p>
    `
    const wineRack = document.querySelector('ul');
    wineRack.appendChild(newWine);
    document.getElementById('add-new-wine').reset();
};


