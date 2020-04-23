//iteradores
/**
 * Funcion que recibe como parametro el carrito y va iterando hasta la longitud del array
 * @param {array} carrito array recibido por parametro con los datos de carrito
 */
function crearIterador(carrito) {
    let i = 0;//variable inicializada a a0
    return {//retorno

        siguiente: () => {
            let fin = (i >= carrito.length);//la variable fin es igual a i mayor o igual a la longitud de carrito(true o false)

            let valor = !fin ? carrito[i++] : undefined;//si valor es distinto a fin suma 1 a carrito,si es igual imprime undefined
            //retornamos fin como true o false y el valor de carrito
            return {
                fin: fin,
                valor: valor
            }
        }
    }
}


const carrito = ['Productor 1', 'Producto 2', 'Producto 3', 'Producto 4'];//declaramos carrito con valores

const recorrerCarrito = crearIterador(carrito);//asignamos el resultado de crearIterador a una variable


console.log(recorrerCarrito.siguiente());///recorremos uno a uno los valores en cada llamada al metodo siguiente()

console.log(recorrerCarrito.siguiente());

console.log(recorrerCarrito.siguiente());


console.log(recorrerCarrito.siguiente());


console.log(recorrerCarrito.siguiente());//fin del array
