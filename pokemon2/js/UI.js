class UI {

    constructor() {
        this.api = new API();//instanciar la api


    }
    mostrarPokemon(pokemon) {
        const content = document.querySelector('#content');
        let html = ``;
        for (let poke = 0; poke < pokemon.length; poke++) {
            let pokeIndividual = 1 + poke
            html += `
        <div class=flex-card ${pokemon[poke].name}> 
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeIndividual}.png" alt="${pokemon[poke].name}">
            <p>${pokemon[poke].name}</p>
         </div> ` }
        content.innerHTML = html;

    }
    listarPokemon() {

        this.api.cargarPokemon().then(data => {
            const res = data.dataJson.results;
            this.mostrarPokemon(res)

        })
    }

    filtrarPokemon() {
        const nombrePokemon = document.querySelector('.campo__field').value.toLowerCase()
        this.api.cargarPokemon().then(data => {
            const res = data.dataJson.results;
            res.forEach(poke => {
                if (poke.name == nombrePokemon) {
                    this.api.cargarPokemon(nombrePokemon).then(data => {
                        const pokemonIndividual = data
                        this.pokemonIndividual(pokemonIndividual)

                    })
                } if (nombrePokemon == '') {
                    this.listarPokemon(res)
                }
            });
        })
    }

    pokemonIndividual(pokemon) {
        const { name, height, id, types, abilities } = pokemon.dataJson;
        const content = document.querySelector('#content');
        let html = ``;
        html += `
        <div class=flex-solo> 
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" alt="${name}">
            <div>
                <p>Nombre: ${name}</p>
                <p>Altura: ${height}</p>
                <p>Tipo: ${types[0].type.name}</p>
                <p>Ataque: ${abilities[0].ability.name}</p>
            </div>
        </div>`
        content.innerHTML = html;
    }

}
