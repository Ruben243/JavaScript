class API{
    async obtenerDatos() {
        //Asignamos a una variable la consulta a la api y esperamos a que este completa
        const datos = await fetch('https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Gasolinerasv2/FeatureServer/0/query?where=1%3D1&outFields=OBJECTID,Localidad,Direcci%C3%B3n,Longitud,Latitud,Precio_gasolina_95,Precio_gas%C3%B3leo_A,Horario&outSR=4326&f=json');
        const respuestaJson = await datos.json();//asignamos el resultado de la consulta y los convertimos a Json
      
        

        return {
            respuestaJson //retorna los resultados
        }
    }
}