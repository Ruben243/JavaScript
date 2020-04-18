//Promises
const esperando = new Promise(function (resolve, reject) {

    setTimeout(function () {
        resolve('Se ejecuto');//a los 5 segundos manda resolve

    }, 5000);
});

esperando.then(function (mensaje) {
    console.log(mensaje);

});//then va a esperar a resolve para ejecutar el codigo


//se crea un nuevo promise
const aplicarDescuento = new Promise(function (resolve, reject) {
    const descuento = false;
    if (descuento) {
        resolve('Descuento aplicado');//cuando es correcto se ejecuta resolve
    } else {
        reject('No se aplica');//cuando hay un fallo se envia reject y se ejecuta catch

    }
});

//se usa then obligatoriamente para llamar a resolve o reject del Promise 
aplicarDescuento.then(function (resultado) {
    console.log(resultado);

}).catch(function (error) {//catch se ejecuta cuando se envia reject,cuando hubo un fallo
    console.log(error);

});