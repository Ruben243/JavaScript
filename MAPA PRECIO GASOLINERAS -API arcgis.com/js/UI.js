class UI {
    constructor() {

        this.api = new API();//instanciar la api

        this.markers = new L.LayerGroup();//crear los markers 

        this.mapa = this.inicializarMapa();//Muestra e mapa inicialmente
    }

    /**
     * Metodo que inicializa el mapa en unas coordenadas con zoom 6.
     * Creaa el Layer con el texto de Copyright y lo añade al mapa
     */
    inicializarMapa() {
        const map = L.map('mapa').setView([40.4165000, -3.7025600], 6);

        const enlaceMapa = '<a href="http://openStreetmap.org">OpenStreeMap</a>';

        L.tileLayer(
            'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '@ ' + enlaceMapa + 'Contributors',
            maxZoom: 18,
        }).addTo(map);//añade el layer al mapa
        return map;//retorna el mapa
    }

    /**
     * Metodo que recoje los datos de la consulta de obtenerDatos y los asigna a una variable y se los pasa a
     * otro metodo para dibujar los pines mostrarPines
     * @see obtenerDatos()
     * @see mostrarPines
     */
    mostrarEstablecimientos() {
        //Obtiene los datos
        this.api.obtenerDatos()
            .then(datos => {
                const resultado = datos.respuestaJson.features; //los asigna a una variable
               
                this.mostrarPines(resultado);//los pasa por parametro a un metodo
            })


    }
    /**
     * Metodo que limpia los pines existentes,crea los Popup con el texto y los añade al mapa
     * @param {String} datos recibidos de la obtenerDatos()
     * @see obtenerDatos()
     */
    mostrarPines(datos) {

        this.markers.clearLayers();//limpiar los markers existentes

        //recorrer establecimientos
        datos.forEach(dato => {
            //destructuring a los resultados para extraer los datos que necesitamos.
            const { attributes: { Dirección, Precio_gas, Horario,Longitud,Latitud } } = dato;
    
            //Crear el  pop-up con .popup
            const opcionesPopUp = L.popup()
                .setContent(
                    `<p>Calle:${Dirección}</p>
                    <p>Precio gasolina: ${Precio_gas}</p>
                    <p>Horario de apertura: ${Horario}</p>`
                );
         
            //Crea el pin pasandole la longitud y latitud como parametro
            const marker = new L.marker([
                parseFloat(Latitud),//lattitud
                parseFloat(Longitud)///longitud
            ]).bindPopup(opcionesPopUp);//..bindPopup añade el popup al mapa
            console.log(marker);

            this.markers.addLayer(marker);//añade el pin a un grupo de pines

        });
        this.markers.addTo(this.mapa);//añade el grupo de  pines al mapa

    }
    /**
     * Metodo que obtiene los resultados y los pasa al metodo filtrarSugerencias() para filtrarlos
     * @param {String} busqueda string escrito en el input de busqueda
     * @see filtrarSugerencias()
     */
    obtenerSugerencias(busqueda) {
        this.api.obtenerDatos()
            .then(datos => {
                const resultados = datos.respuestaJson.features; //obtener datos de la API
                this.filtrarSugerencias(resultados, busqueda);//enviar los resultado y la busqueda 
            })
    }

    filtrarSugerencias(resultados, busqueda) {
        //filtrar con .filter.Si es distinto de -1 asigna a filtro
        const filtro = resultados.filter(filtro => filtro.attributes.Dirección.indexOf(busqueda) !== -1);


        this.mostrarPines(filtro);//Dibuja solo los pines que coincidan con el termino d ela busqueda

    }

}
