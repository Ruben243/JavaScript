//Destructuring en una funcion

//forma anterior tendrias que hacer una variable por cada dato que quisieras

function reserva(completo, opciones) {
    opcion = opciones || {};

    let metodo = opciones.metodoPago,
        cantidad = opciones.cantidad,
        dias = opciones.dias;

    console.log(metodo);
    console.log(dias);
    console.log(cantidad);




}

reserva(
    true, {
    metodoPago: 'Tarjeta',
    cantidad: 200,
    dias: 3
}
)

//forma moderna
function reservas(completo,
                            {//valores por default
                                metodoPago = 'Efectivo',
                                cantidad = 0,
                                dias = 0
                            } = {}//si esta vacio o no se paso
                    ) {
    //si completo es true procede a reservar,si no abandona
    if (completo) {
        console.log('Procede a resevar');

    } else {
        console.log('abandonar');

    }
    console.log(metodoPago);
    console.log(dias);
    console.log(cantidad);


}

reservas(
    true, {
    metodoPago: 'Tarjeta',
    cantidad: 5000,
    dias: 5
}
)