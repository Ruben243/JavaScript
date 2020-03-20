const meses = new Array('Enero', 'Febrero');


console.log(meses);

meses[2] = 'Marzo';//añadimos un mes mas
meses.push('Abril')//los añade directamente al final del array

meses.unshift('Mes 0');//lo pone al principio del array

meses.pop();//elimina el elemento final

meses.shift()//elimina el primer elemento

meses.splice(2, 1)//elimina la cantidad de numeros especificada(1) desde la posicion indicada(2)

meses.reverse();//invierte el array

let array1 = [1, 2, 3, 4],
    array2 = [5, 6, 7, 8];
    

console.log(array1.concat(array2));//concatenar dos array

let frutas = ['Platano', 'Manzana', 'Fresa', 'Naranja', 'Zanahoria'];

frutas.sort();//ordena por orden alfabetico,no sirve para numeros

console.log(frutas);

let array1 = [67, 87, 23, 12, 78, 98, 56, 42, 100];

frutas.sort(function (x, y){//le pasamos una funcion para ordenar los numeros de menor a mayor
});

console.log(array1);