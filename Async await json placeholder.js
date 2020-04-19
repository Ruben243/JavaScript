async function leerTodos() {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos');

    //procede cuandp la respuesta este hecha
    const datos = await respuesta.json();
    return datos;//retonamos los datos
}

leerTodos()
    .then(usuarios => console.log(usuarios))
   