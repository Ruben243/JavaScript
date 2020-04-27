//patron de diseño module

const comprarBoleto = (function () {

    
    let evento = 'Conferencia Js 2020';//privado,no se ve fuera de la funcion
    //esta funcion sera retornada y si podra verse
    const adquirirBoleto = () => {
        const elemento = document.createElement('p');
        elemento.textContent = `comprando entrada para ${evento}`;
        document.querySelector('#prueba').appendChild(elemento);
    }

    //puede verse fuera de la funcion
    return {
        mostrarBoleto: function () {
            adquirirBoleto();
            
        }
    }

})();


comprarBoleto.mostrarBoleto();//unicamente la funcion,sus valores no
console.log( comprarBoleto.evento);//esto no se vera por que no esta en el return y se interpreta como privado
