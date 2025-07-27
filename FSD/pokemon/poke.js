async function fetchPokemon() {
    const pokeNumber = document.getElementById('pokeInput').value;
    const displayDiv = document.getElementById('pokemonDisplay');

    if (!pokeNumber || pokeNumber < 1 || pokeNumber > 898) {
        displayDiv.innerHTML = '<p>Please enter a number between 1 and 898.</p>';
        return;
    }

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNumber}`);
        if (!response.ok) {
            throw new Error('Pokémon not found');
        }
        const data = await response.json();

        const imageUrl = data.sprites.other['official-artwork'].front_default;

        displayDiv.innerHTML = `<h2>${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h2><img src="${imageUrl}" alt="${data.name}" />`;
    } catch (error) {
        displayDiv.innerHTML = `<p>Error fetching Pokémon: ${error.message}</p>`;
    }
}