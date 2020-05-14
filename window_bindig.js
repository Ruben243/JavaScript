//window bindig

function obtenerAuto() {
    console.log(`Mi auto es color ${this.color}`);

}

const color = 'Negro';//undefined
window.color = 'Rojo';//Color rojo
obtenerAuto();//no puede encontrar el color negro por que no esta relacionada con ella.
              //Pero lo busca en el window