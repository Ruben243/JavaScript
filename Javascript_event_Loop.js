//Javascript event Loop (Primero se ejecuta el Stack,cuando acaba se ejecuta el Queue)

/**
 * Odern de ejecucion
 * Stack-console lock
 * Job Queue-Promise
 * task Queue-setTiemout incluso sin retraso especificado
 */

console.log('Yo me mostrare el primero');

setTimeout(function () {
    console.log('Yo me mostrare el segundo');
},3000)



console.log('Yo me mostrare el tercero');

new Promise(function (res) {
    res('Yo soy un promise')
}).then(console.log);



setTimeout(function () {
    console.log('Yo me mostrare el cuarto');

},0)

console.log('Yo me mostrare el quinto');