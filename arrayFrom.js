//Array de objetos
const dinosaurs=[
    {name:'Velociraptor',diet:'Carnivoro'},
    {name:'Triceratops',diet:'Herbivoro'},
    {name:'T-REX',diet:'Carnivoro'},
    {name:'Ankylosaurio',diet:'Herbivoro'},
];

//El método Array.from() crea una nueva instancia de Array a partir de un objeto iterable.
let dino=Array.from(dinosaurs,({name})=>name);
let diets=Array.from(dinosaurs,({diet})=>diet);

console.log(dino);//[ 'Velociraptor', 'Triceratops', 'T-REX', 'Ankylosaurio' ]
console.log(diets);//[ 'Carnivoro', 'Herbivoro', 'Carnivoro', 'Herbivoro' ]