//Exisyte un objeto llamado Date

const diaHoy = new Date();
console.log(diaHoy);

//fecha en especifico
let navidad2017 = new Date('12-25-2017');

console.log(navidad2017);

//obtener el mes actual enero es el mes 0 diciembre 11 nunca llega a 12

let mes = diaHoy.getMonth();//devuelve el mes actual

console.log(mes);

let day = diaHoy.getDate();//devuelve el dia actual

console.log(day);

let year = diaHoy.getFullYear();//devuelve el año actual

console.log(year);

let year2 = diaHoy.setFullYear(2009);//con el metodo set se puede cambiar el parametro que quieras.

year = diaHoy.getFullYear();

console.log(year);

let minu = diaHoy.getMinutes();//devuelve los minutos actuales

console.log(minu);

let hour = diaHoy.getHours();//devuelve la hora actual

console.log(hour)


