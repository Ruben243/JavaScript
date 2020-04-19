/**
 * Clase api que recibira una apikey por parametro
 */
class API {
    constructor(apiKey) {
        this.apiKey = apiKey;

    }
    /**
     * Metodo que traera los datos con las criptomonedas y retornara el resultado a obtenerMonedasApi()
     * @see obtenerMonedasApi() 
     */
    async obtenerMonedasApi() {
        const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apiKey}`;//url de cosulta para rellenar el select
        
        const urlObtenerMonedas = await fetch(url);//fetch a la api cojn el metodo await que parara el codigo hasta que este completa

       
        const monedas = await urlObtenerMonedas.json(); //obtener el resultado en json


        return {
            monedas //retornar el resultado
        }
    }

    /**
     * Metodo que hara la consulta para traer el resultado mandando la criptomoneda elegida,la moneda y la apikey en la url
     * @param {*} moneda la moneda seleccionada pasada por parametro
     * @param {*} criptomoneda la cripto moneda pasada por parametro
     * @see app 36
     */
    async obtenerValores(moneda, criptomoneda) {
        //variable con la url y los datos de la consulta
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}&api_key=${this.apiKey}`;
       

        const urlConvertir = await fetch(url); //consultar en la rest api
        const resultado = await urlConvertir.json();//obtener el resultado en json

        return {
            resultado//retornar el resultado
        }
    }
}