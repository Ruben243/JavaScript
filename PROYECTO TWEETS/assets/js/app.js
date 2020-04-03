//PROYECTO TWEETS

//creamos una constante y le signamos el elemento con el id lista-tweet
const listaTweets = document.getElementById('lista-tweets');


//Event Listeners
eventListeners();

/**
 * Funcion que se ejecuto segun los event liseners programados y ejecuta difrentes funciones
 * @see agregarTweet
 * @see borrarTweet
 * @see localStorageStorageListo
 */
function eventListeners() {
    //Controla cuando se envia el formulario y ejecuta una funcion al hacer click
    document.querySelector('#formulario').addEventListener('submit',
        agregarTweet);

    //Controla cuando se borra un elemento y ejecuta una funcion al hacer click
     listaTweets.addEventListener('click', borrarTweet);

    //Controla cuando el contenido del DOM esta cargado y ejecuta una funcion 
    document.addEventListener('DOMContentLoaded', localStorageStorageListo);

}


/**
 * Añade el tweet,generando ademas el boton para eliminarlo
 * @param {*} e parametro especifico de la funcion al que se le asigna la funcion preventDefault()
 * @param {const} tweet variable constante a la que se le asignara el valor del elemento con
 * el id tweet
 * @param {const} botonBorrar variable constante que se usara para guardar el boton de borrado
 * @param {const} li variable constante a la que se le asignara un elemento creado
 * @see preventDefault
 */
function agregarTweet(e) {
    e.preventDefault();
   //leer valor text area
    const tweet = document.getElementById('tweet').value;
    //crear boton de eliminar
    const botonBorrar = document.createElement('a');//creacion del boton
    botonBorrar.classList = 'borrar-tweet';//añadimos la clase
    botonBorrar.innerText = 'X';//añadimos el texto

    const li = document.createElement('li');
    li.innerHTML = tweet;//añadinos el texto al li
    //añade boton de borrar al tweet
    li.appendChild(botonBorrar);
    //añade el tweet a la lista
    listaTweets.appendChild(li);

    //añadir a local storage
    agregarTweetLocalStorage(tweet);



}

/**
 * Recibe el tweet de agregarTweet(e),obtiene los valores de localStorage,añade el tweet y los guarda como array
 * @param {string} tweet valor que se recibe como parametro de agregarTweet(e);
 * @param {array} tweet se le asigna el contenido del localStorage y se le agregara el tweet recibido por parametro
 * @see agregarTweet(e);
 */
function agregarTweetLocalStorage(tweet) {
    let tweets;
    tweets = obtenerTweetLocalStorage();//obtenermos los elementos del localStorage guardados en un array
    tweets.push(tweet);//añadimos el tweet,vacio o lleno pero en forma de array
    //convertir de string a array
    localStorage.setItem('tweets', JSON.stringify(tweets)); //convierte el JSON a string(agrega los valores que esten 
                                                            //en el array mas el nuevo)


}

/**
 * Comprueba si hay o no elementos en localStorage (retorna un array)
 */
function obtenerTweetLocalStorage() {
    let tweets;
    //revisamos valores del localStorage
    if (localStorage.getItem('tweets') === null) {
        tweets = [];//si no hay nada,se inicia como un array vacio
    } else {
        tweets = JSON.parse(localStorage.getItem('tweets'));//convierte el array de localStorage en un JSON
                                                            

    }
    return tweets;



/**
 * Elimina el tweet del dom y llama una funcion
 * @param {*} e parametro especifico de la funcion al que se le asigna la funcion preventDefault()
 * y controlar donde hacemos click
 * @see preventDefault
 * @see borrarTweetLocalStorage
 */
function borrarTweet(e) {
    e.preventDefault();//previene el comportamiento por defecto
    if (e.target.className === 'borrar-tweet') {//si clickamos en el boton con la clase borrar-tweet
        e.target.parentElement.remove();//elimina el elemento
        borrarTweetLocalStorage(e.target.parentElement.innerText);//pasa el elemento para borrarlo del localStorage

    }


}





/**
 * Muestra los datos almacenados en el localStorage creando los elementos necesarios para ello
 * 
 */
function localStorageStorageListo() {
    let tweets;
    tweets = obtenerTweetLocalStorage();//obtenemos los valores del localStorage
    tweets.forEach(function (tweet) {//recorremos los valores del localStorage
        const botonBorrar = document.createElement('a');//creacion del boton
        botonBorrar.classList = 'borrar-tweet';//añadimos la clase
        botonBorrar.innerText = 'X';//añadimos el texto

        const li = document.createElement('li');
        li.innerHTML = tweet;//añadinos el texto al li
        //añade boton de borrar al tweet
        li.appendChild(botonBorrar);
        //añade el tweet a la lista
        listaTweets.appendChild(li);


    });
}

/**
 * 
 * @param {innerText} tweet paremetro que recibe de borrarTweet(e)
 * @see borrarTweet(e)
 */
function borrarTweetLocalStorage(tweet) {
    let tweets, tweetBorrar;
    //eliminar la x del final
    tweetBorrar = tweet.substring(0, tweet.length - 1);//borra la X
    tweets = obtenerTweetLocalStorage();//obtener los valores del localStorage
    tweets.forEach(function (tweet, index) {//si el tweet es igual al que borramos.Index marca el elemento donde estas
        if (tweetBorrar === tweet) {
            tweets.splice(index, 1);
        }
    });
    localStorage.setItem('tweets', JSON.stringify(tweets));//convertimos de array a JSON

}
