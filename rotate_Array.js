// Rotar array por k posiciones (rotación hacia la derecha)
// Ejemplo: [1, 2, 3, 4, 5] rotado 3 posiciones → [4, 5, 1, 2, 3]

const array = [1, 2, 3, 4, 5];  // Array original
const k = 3;                     // Número de posiciones a rotar

// Paso 1: array.slice(k) obtiene los elementos desde la posición k hasta el final
//         En este caso: [4, 5] (índices 3 y 4)
// Paso 2: array.slice(0, k) obtiene los elementos desde el inicio hasta k (exclusivo)
//         En este caso: [1, 2, 3] (índices 0, 1 y 2)
// Paso 3: concat() une ambos fragmentos en el orden inverso para lograr la rotación
const arrayRotado = array.slice(k).concat(array.slice(0, k));

console.log(arrayRotado);
// Salida: [4, 5, 1, 2, 3]