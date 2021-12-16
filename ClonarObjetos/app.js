//Objeto con objetos 
const dinosaurio = {
    name: "Dilophosaurio sinensis",
    Datos: {
        tamaño: {
            altura: "1.80", Peso: "500Kg",
            Genealogia: {
                orden: "Saurischia",
                Suborden: "Theropoda"
            }
        }
    }
}

//Objeto simple
const persona = {
    name: "Marbelys",
    lastName: "Zamora"
};

console.log("Objeto original antes de cambios " + dinosaurio.Datos.tamaño.altura);//1.80

//Mantienen la referencia y sobre escriben el objeto complejo original
const dinoClon = Object.assign({}, dinosaurio);//Object assing
const dinoClon2 = { ...dinosaurio }//spread operator
dinoClon2.Datos.tamaño.altura = "2";
console.log("Objeto1 original despues de cambios " + dinosaurio.Datos.tamaño.altura);//2
console.log("Objeto1 clon con Object assign " + dinoClon.Datos.tamaño.altura);//2
console.log("Objeto1 clon2 con spread operator " + dinoClon2.Datos.tamaño.altura);//2


//NO mantiene la referencia ni sobreescribe el objeto complejo original
const dinoClon3 = JSON.parse(JSON.stringify(dinosaurio));
dinoClon3.Datos.tamaño.altura = "1.80";
console.log("Obejeto1 clon3 con Json.parse y Json.stringily " + dinoClon3.Datos.tamaño.altura);//1.80


//Object assing y spread operator NO mantiene la referencia ni modifica los datos del objeto original en objetos simples
const marbe = Object.assign({}, persona);
const marbe2 = { ...persona };
const marbe3 = JSON.parse(JSON.stringify(persona));
marbe.name = "marbelys";
marbe2.name = "marbe";
marbe3.name = "Marbe";
console.log("Objeto2 clon Object assign " + marbe.name);//marbelys
console.log("Objeto2 clon2 spread operator " + marbe2.name);//marbelys
console.log("Objeto2 clon3  con Json.parse y Json.stringily " + marbe3.name);//Marbe
console.log("Objeto2 original " + persona.name);//Marbelys