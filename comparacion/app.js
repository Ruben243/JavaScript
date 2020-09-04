const primerString = "jagrretefdgfzzerhhxx";
let letra;
let repetidas = new Set();
let repetidas2 = Array(primerString.length)

console.log("Palabra " + primerString);
for (let i = 1; i < primerString.length; i++) {
    for (let j = 0; j < primerString.length; j++) {
        letra = primerString.charAt(i);//empezar desde la segunda para evitar que la repita
        if (letra === primerString[j++]) {
            repetidas.add(letra) //usar un set para que no permita repetidos
            repetidas2.push(letra)
        }
     
    }

}
console.log('Letras repetidas:');
repetidas.forEach(element => {
    console.log(element);
});

