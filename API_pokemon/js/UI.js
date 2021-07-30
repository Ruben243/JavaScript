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
    /**
     * Funcion que recibe los pokemon en json,recorre los datos y los inyecta en el html.Tambien llama a una funcion para seleccionar un pokemon individualmente.
     * @param {json} pokemon
     * @see pokemonCLick() 
     */
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
  
    /**
     * Funcion que establece un evento de click en los parrafos y llama a la funcion de filtrado
     * @see filtrarPokemon()
     */
    pokemonCLick() {
        const parrafos = document.getElementsByTagName('p');
        for (let i = 0; i < parrafos.length; i++) {
            parrafos[i].addEventListener('click', () => {
                let poke = parrafos[i].textContent
                this.filtrarPokemon(poke)
            })

        }

    }

    /**
     * Funcion que filtra los resultados por un parametro string recibido de otras funciones.Dependiendo del valor del parametro se llama a una u otra funcion
     * @param {string} nombre parametro recibido de otras funciones
     * @returns 
     * @see listarPokemon()
     * @see pokeIndividual()
     * @see noPokemon()
     */
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

    /**
     * Funcion que muestra el pokemon filtrado en el html y llama a la funcion para volver atras
     * @param {string} pokemon parametro recibido de otras funciones
     * @see volver()
     */
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

    /**
     * Funcion que muestra un mensaje de error cuando no existe el pokemon.
     * @param {string} nombrePokemon parametro recibido de otras funciones
     */
    noPokemon(nombrePokemon) {
        let html = ``;
        html += `
        <div class=flex-solo> 
           <h1>El pokemon ${nombrePokemon} no figura en los archivos,por favor intentelo con otro pokemon</h1>
        </div>`
        content.innerHTML = html;
    }
    /**
     * funcion que vulve atras
     */
    volver() {
        const volver = document.getElementById('volver');
        volver.addEventListener('click', () => {
            history.go()
        })
    }
}
