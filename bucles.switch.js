//bluce for
let musica = ['Rock', 'Pop', 'Clasica', 'Indy-pop'];

for (let i = 0; i < musica.length; i++) {
    console.log(`tipo de musica: ${musica[i]}`);
    
}

//bucle while
let i = 0;
while (i<10) {
    console.log(`numero ${i}`);
    i++;
}


//bucle do while
let j = 10;
do {
    console.log(`numero ${j}`);
    j--;
} while (j > 0);

//switch

switch (new Date().getMonth()) {
    case 0:
         console.log('enero')
        
        break;
    case 1:
        console.log('febrero')

        break;
    case 2:
        console.log('marzo')

        break;
    case 3:
        console.log('abril')

        break;
    case 4:
        console.log('mayo')

        break;
    case 5:
        console.log('junio')

        break;
    case 6:
        console.log('julio')

        break;
    case 7:
        console.log('agosto')

        break;
    case 8:
        console.log('septiembre')

        break;
    case 9:
        console.log('octubre')

        break;
    case 10:
        console.log('noviembre')

        break;
    case 11:
        console.log('diciembre')

        break;
    default:
        console.log('mes no existe')

        break;
}