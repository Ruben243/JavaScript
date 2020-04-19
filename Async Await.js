//Async Await emascript7 chrome lo soporta
/**
 * Funcion async crea un promise al que se le pasan resolve y reject
 * simulamos un retraso con setInterval y el resolve muestra un mensaje Clientes descargados
 * 
 */
async function obtenerClientes() {
    const clientes = new Promise((resolve, reject) => {
        setInterval(() => {
            resolve('Clientes descargados...');
        }, 2000);

    });

    /**
     * Se crea una constante boleana error inicializada a falso
     * await detine el codigo clientes hasta que se complete.Retorna la respuesta.
     * En caso de error el reject muestra un mensaje de Hubo un error
     */
    const error = false;
    if (!error) {
        const respuesta = await clientes;//se asigna el resultado de clientes a una variable
        return respuesta//se retorna la informacion
    } else {
        await Promise.reject('Hubo un error...');
    }

}

obtenerClientes()
    .then(res => console.log(res))//aqui se muestra la informacion de clientes,que es el mensaje de resolve
    .catch(error => console.log(error));//aqui se muestra el mensaje del error del reject