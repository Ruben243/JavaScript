//Factory patron de diseño objetos de tipo similar pero sin tipo definido


function ConstructorSitios() {
    this.crearElemento = function (texto, tipo) {
        let html;

        if (tipo === 'input') {
            html = new InputHTML(texto);

        } else if (tipo === 'img') {
            html = new ImagenHTML(texto);
        } else if (tipo === 'h1') {
            html = new HeadingHTML(texto);
        } else if (tipo === 'p') {
            html = new ParrafoHTML(texto);
        }

        html.tipo = tipo;

        html.mostrar = function () {
            const elemento = document.createElement(this.tipo);

            if (this.tipo === 'input') {
                elemento.setAttribute('placeholder', this.texto);

            } else if (this.tipo === 'img') {
                elemento.setAttribute('src', this.texto);

            } else {
                elemento.appendChild(document.createTextNode(this.texto));

            }
            document.querySelector('#prueba').appendChild(elemento);

        }
        return html;
    }
}


const InputHTML = function (texto) {
    this.texto = texto;
}
const HeadingHTML = function (texto) {
    this.texto = texto;
}

const ImagenHTML = function (texto) {
    this.texto = texto;
}
const ParrafoHTML = function (texto) {
    this.texto = texto;
}



const sitioWeb = new ConstructorSitios();
const elementosWeb = [];

elementosWeb.push(sitioWeb.crearElemento('Bienvenidos', 'h1'));
elementosWeb.push(sitioWeb.crearElemento('Bienvenidos a mi sitio web', 'p'));
elementosWeb.push(sitioWeb.crearElemento('logo.svg', 'img'));
elementosWeb.push(sitioWeb.crearElemento('Contacto al sitio', 'input'));

elementosWeb.forEach(elemento => {
    elemento.mostrar();
})
console.log(elementosWeb);
