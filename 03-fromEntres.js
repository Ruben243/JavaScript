const map = new Map([ 
    ['nombre', 'Producto 1'], 
    ['precio', 20] 
]);



const objeto = Object.fromEntries(map);//fromEntries te permite crear un objeto de una serie llave valor
                                        //Se le pasa la serie llave valor donde lo coje
console.log(objeto);

delete objeto.precio;//ahora se le pueden aplicar metodos propios d elos objetos

console.log(objeto);

