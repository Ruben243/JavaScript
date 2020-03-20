//template
const producto1 = 'pizza',
    precio1 = 30,
    producto2 = 'Hamburguesa',
    precio2 = 40;


let html;
//forma antiguia
html = '<ul>' +
    '<li>Order ' + producto1 + '</li>' +
    '<li>Order ' + precio1 + '</li>' +
    '<li>Order ' + producto2 + '</li>' +
    '<li>Order ' + precio2 + '</li>' +
    '</ul>'

//forma nueva
html = `<ul>
<li>Order ${producto1}</li>
<li>Order ${precio1}</li>
<li>Order ${producto2}</li>
<li>Order ${precio2}</li>
<li> Total: ${total(precio1,precio2)}//funcion que calcula el total
</ul>`

function total(precio1,precio2) {
    return precio1+precio2
}

document.getElementById('prueba').innerHTML = html;