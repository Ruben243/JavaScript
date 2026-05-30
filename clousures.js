function outer() {
    let count = 0;  // Variable local que se inicializa en 0

    return function inner() {
        count++;  // Incrementa la variable 'count'
        console.log(`Count: ${count}`);  // Muestra el valor actual
    }
}
const counter1 = outer();  // Su propio 'count'
const counter2 = outer();  // Otro 'count' independiente

counter1();  // Count: 1
counter2();  // Count: 1 (no afecta a counter1)
counter1();  // Count: 2