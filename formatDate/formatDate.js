const formatDate=(date,locale,options)=>new Intl.DateTimeFormat(locale,options).format(date);

const fecha=new Date();

console.log("Fecha Dia,Mes,Año ",formatDate(fecha,'es')); //6/1/2022
console.log("Fecha Año,Mes,Dia ",formatDate(fecha,'ko')); //2022. 1. 6.
console.log("Dia de Mes de Año ",formatDate(fecha,'es',{dateStyle:'long'}));//6 de enero de 2022
console.log("Hora ",formatDate(fecha,'es',{timeStyle:'short'}));//12:20
console.log("Dia Semana Dia mes ",formatDate(fecha,'es',{weekday:'short',day:'numeric'}));// jue 6




