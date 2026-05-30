function movezeros(arr) {
    // 'pos' marca la posición donde debe ir el SIGUIENTE número NO CERO.
    // Inicialmente, empieza en 0 (el principio del array).
    let pos = 0;

    // Recorremos todo el array con 'i' (el explorador)
    for (let i = 0; i < arr.length; i++) {

        // Si encontramos un número que NO es cero...
        if (arr[i] !== 0) {

            // INTERCAMBIO (SWAP):
            // Guardamos temporalmente lo que hay en 'pos' (que probablemente sea un 0)
            let temp = arr[pos];

            // Ponemos el número no-cero (de 'i') en la posición 'pos'
            arr[pos] = arr[i];

            // Ponemos lo que había en 'pos' (el 0) en la posición 'i'
            arr[i] = temp;

            // Avanzamos nuestro cursor de escritura 'pos' para que el próximo 
            // número no-cero vaya justo después de este.
            pos++;
        }
        // Si arr[i] ES 0, simplemente hacemos nada y avanzamos 'i'.
        // El 0 se queda donde está (o se mueve hacia atrás si fue intercambiado),
        // esperando a que 'pos' lo alcance o quede detrás de todos los no-ceros.
    }

    // Al final, todos los no-ceros están al principio (ordenados como aparecieron)
    // y todos los ceros han sido empujados al final.
    return arr;
}

// Ejecución de prueba
console.log(movezeros([0, 3, 2, 10, 0, 12]));
// Salida esperada: [ 3, 2, 10, 12, 0, 0 ]