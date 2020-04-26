/**
 * Clase que se exporta cuyo constructor recibe dos string por parametro un artista y una cancion
 * Posee un metodo async/await llamado consultarAPI que hace la consulta a la api
 * recibe la respuesta yb la convierte a json,luego la retorna
 */
export class API{
    constructor(artista, cancion) {
        this.artista = artista;
        this.cancion=cancion;
    }
    async consultarAPi() {
        const url = await fetch(`https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`);//consulta a la api

        const respuesta = await url.json();//convierte los datos a json
        return {
            respuesta//retorna la respuesta
        }
    }
}