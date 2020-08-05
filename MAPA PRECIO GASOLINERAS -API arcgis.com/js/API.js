class API{
    async obtenerDatos() {
        //Asignamos a una variable la consulta a la api y esperamos a que este completa
        const datos = await fetch('https://services1.arcgis.com/nCKYwcSONQTkPA4K/ArcGIS/rest/services/Gasolineras_Pro/FeatureServer/0/query?where=1%3D1&&objectIds=&units=esriSRUnit_Meter&returnGeodetic=false&outFields=Direcci%C3%B3n%2CProvincia%2CLongitud%2CLatitud%2CPrecio_gas%2CHorario&returnGeometry=true&returnExceededLimitFeatures=false&f=json&token=');
        const respuestaJson = await datos.json();//asignamos el resultado de la consulta y los convertimos a Json
      

        return {
            respuestaJson //retorna los resultados
        }
    }
}