//Callbacks *ejem funcion que corre dentro de otr funcion

const ciudades = ['Londres', 'New york', 'Viena', 'Madrid'];

//inline callback
ciudades.forEach(function (ciudad){
    console.log(ciudad);
    
});


//con funcion definida
function callback(ciudad) {
    console.log(ciudad);

}

ciudades.forEach(callback);



const paises = ['España', 'Inglaterra', 'Australia', 'Irlanda', 'Portugal'];
//se agrega un pais cada dos segundos
function nuevoPais(pais,callback) {
    setTimeout(function () {
        paises.push(pais);
       callback();
    }, 2000);
}



//los paises se muestras desùes de 1 segundo
function mostrarPaises() {
    setTimeout(function () {
        let html = '';

        paises.forEach(function (pais) {
            html += `<li>${pais}</li>`;
        });
        document.getElementById('prueba').innerHTML = html;
    }, 1000);
}

//cuando se agrega un pais cuando ya tienes los demas cargados
nuevoPais('Alemania', mostrarPaises);

//mostrar los paises
mostrarPaises();

