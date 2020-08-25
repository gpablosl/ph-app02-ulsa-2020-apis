const pokemon = {
    sprite: document.getElementById('pokemon-image'),
    specie: document.getElementById('pokemon-specie'),
    abilities: document.getElementById('pokemon-abilities'),
    group: document.getElementById('pokemon-group'),
    information: document.getElementById('pokemon-information'),
    name: document.getElementById('pokemon-name'),
    weight: document.getElementById('pokemon-weight'),
    stats: document.getElementById('pokemon-stats'),
    type: document.getElementById('pokemon-type')
}


const GetPokemon = async ()=>{
    const url = 'https://pokeapi.co/api/v2/pokemon/regice';


    const data = await fetch(url);
    const dataJson = await data.json();

    
    console.log(await dataJson);


    pokemon.sprite.src = await dataJson.sprites.front_default;
    pokemon.name.innerHTML = await `Name: ${dataJson.name}`;
    pokemon.abilities.innerHTML = await `abilities: ${dataJson.abilities}`;
    pokemon.specie.innerHTML = await `species: ${dataJson.species}`;
    pokemon.weight.innerHTML = await `weight: ${dataJson.weight}`;
    pokemon.group.innerHTML = await `group: ${dataJson.group}`;
    pokemon.stats.innerHTML = await `stats: ${dataJson.stats}`;
    pokemon.type.innerHTML = await `type: ${dataJson.type}`;


}

GetPokemon();