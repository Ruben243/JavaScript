const nombres=[
    'Ruben','Anna','Pedroche','Marbelys',
    'Marlene','Yasmin','Ruben','Marlene'
];
/*Funcion que cuenta la cantidad de veces que aparece un nombre en un array
Para lograr contarlos, llamo a la función reduce() y dentro de ella paso 
una función como parámetro que a su vez recibirá sus propios parámetros
(contadorNombre, nombre), nombre representa cada elemento del array y
contadorNombre será una objeto donde guardaré la cantidad de veces 
que un nombre se repita.
Retorna un objeto,cuyo estado inicial se representa con el {}*/
const cantidadNombres=nombres.reduce((contadorNombre,nombre)=>{
    contadorNombre[nombre]=(contadorNombre[nombre] || 0) + 1;

    return contadorNombre;
},{});

console.log(cantidadNombres);//{ Ruben: 2, Anna: 1, Pedroche: 1, Marbelys: 1, Marlene: 2, Yasmin: 1 }



const hero = ["Thor", "Ironman", "Thor", "hulk"];


const vengadores = hero.reduce((vengadores, hero) => (
    vengadores[hero] = vengadores[hero] + 1 || 1, vengadores
), {});

console.log(vengadores);//{ Thor: 2, Ironman: 1, hulk: 1 }
