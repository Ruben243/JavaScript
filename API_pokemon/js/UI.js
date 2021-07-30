class UI {

    constructor() {
        this.api = new API();//instanciar la api


    }
    /**
     * Funcion que usa una instancia de la clase API para llamar al metodo que carga los pokemon,trae los resultados y se los para a
     * la funcion mostrarPokemon
     * @see mostrarPokemon()
     */
  listarPokemon() {
        this.api.cargarPokemon().then(data => {
            const res = data.dataJson.results;
            this.mostrarPokemon(res)

        })
    }
    mostrarPokemon(pokemon) {
        const content = document.querySelector('#content');
        let html = ``;
        for (let poke = 0; poke < pokemon.length; poke++) {
            let pokeIndividual = 1 + poke
            html += `
        <div class="flex-card ${pokemon[poke].name}"> 
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeIndividual}.png" alt="${pokemon[poke].name}">
            <p>${pokemon[poke].name}</p>
         </div> `
        }
        content.innerHTML = html;
        this.pokemonCLick()
    }
  
    pokemonCLick() {
        const parrafos = document.getElementsByTagName('p');
        for (let i = 0; i < parrafos.length; i++) {
            parrafos[i].addEventListener('click', () => {
                let poke = parrafos[i].textContent
                this.filtrarPokemon(poke)
            })

        }

    }

    filtrarPokemon(nombre = '') {
        if (nombre != '') {
            this.api.cargarPokemon(nombre).then(data => {
                const pokemonIndividual = data
                this.pokemonIndividual(pokemonIndividual)
            });
            return
        }
        const nombrePokemon = document.querySelector('.campo__field').value.toLowerCase()
        if (nombrePokemon == '') {
            this.listarPokemon()
            return
        }
        this.api.cargarPokemon().then(data => {
            const res = data.dataJson.results;
            const pokemonFind = res.find(pokemon => pokemon.name == nombrePokemon);
            if (pokemonFind) {
                this.api.cargarPokemon(nombrePokemon).then(data => {
                    const pokemonIndividual = data
                    this.pokemonIndividual(pokemonIndividual)
                });

            } else if (!pokemonFind && nombrePokemon != '') {
                this.noPokemon(nombrePokemon);
            }
        });
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
            <button id="volver">Volver</button>
        </div>`
        content.innerHTML = html;
        this.volver();


    }

    noPokemon(nombrePokemon) {
        let html = ``;
        html += `
        <div class=flex-solo> 
           <h1>El pokemon ${nombrePokemon} no figura en los archivos,por favor intentelo con otro pokemon</h1>
        </div>`
        content.innerHTML = html;
    }
    volver() {
        const volver = document.getElementById('volver');
        volver.addEventListener('click', () => {
            history.go()
        })
    }
}
