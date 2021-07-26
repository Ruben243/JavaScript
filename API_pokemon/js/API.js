class API {
    async cargarPokemon(pokemon = null) {
        if (pokemon == null) {
            const url = 'https://pokeapi.co/api/v2/pokemon/?limit=151'
            const datos = await fetch(url);
            const dataJson = await datos.json();
            return {
                dataJson
            }

        } else {
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
            const datos = await fetch(url);
            const dataJson = await datos.json();
            return {
                dataJson
            }

        }
    }
}





