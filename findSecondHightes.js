// Definimos un array con números desordenados
const arr = [10, 5, 30, 8, 4, 20, 15];

// Inicializamos 'max' (el número más grande encontrado hasta ahora) 
// con el valor más bajo posible (-Infinity) para asegurar que cualquier número del array lo supere.
let max = -Infinity;

// Inicializamos 'second' (el segundo número más grande) también con -Infinity.
// Esto servirá para almacenar el valor que fue el máximo anterior al encontrar uno nuevo.
let second = -Infinity;

// Recorremos cada número 'n' del array
for (let n of arr) {
    // Caso 1: Si el número actual es mayor que el máximo registrado
    if (n > max) {
        // El antiguo máximo pasa a ser el segundo máximo
        second = max;
        // Actualizamos el máximo con el nuevo número encontrado
        max = n;
    }
    // Caso 2: Si el número NO es mayor que el máximo, pero es mayor que el segundo máximo
    // y además es estrictamente menor que el máximo (para evitar duplicados si el máximo se repite)
    else if (n > second && n < max) {
        // Actualizamos el segundo máximo con este nuevo valor
        second = n;
    }
}

// Imprimimos por consola el segundo número más grande del array
console.log(second);
// En este caso, el resultado será 20 (ya que 30 es el máximo y 20 es el siguiente más alto)