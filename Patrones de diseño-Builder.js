//Builder (se crea una capa abstraccion aparte de la funcionalidad)
class Formulario {
    constructor() {
        this.campos = [];

    }
    /**
     * Metodo que recibe dos parametros e instancia difrenctes tipos de elemento segun su tipo
     * @param {String} tipo define el tipo del elemento
     * @param {String} texto define el texto para el placeholder del elemento
     */
    agregarCampo(tipo, texto) {
        let campos = this.campos;
        let campo;

        switch (tipo) {
            case "text":
                campo = new InputText(texto);
                break;
            case "email":
                campo = new InputEmail(texto);
                break;
            case "button":
                campo = new Boton(texto);
                break;
            default:
                throw new Error("Tipo no valido" + tipo);
                break;
        }
        campos.push(campo);
    }
    /**
     * Metodo que creara un formulario y sus elementos y los retornara
     */
    obtenerFormulario() {
        let form = document.createElement('form'),
            campos = this.campos.length,
            campo;


        for (let i = 0; i < campos; i++) {
            campo = this.campos[i];
            form.appendChild(campo.crearElemento());

            let br = document.createElement('br');
            form.appendChild(br);
        }
        return form;
    }
}

class Inputs {
    constructor(texto) {
        this.texto = texto;

    }
}

class InputText extends Inputs {
    constructor(texto) {
        super(texto);

    }
    crearElemento() {
        const inputText = document.createElement('input');
        inputText.setAttribute('type', 'text');
        inputText.setAttribute('placeholder', this.texto);
        return inputText;
    }
}
class InputEmail extends Inputs {
    constructor(texto) {
        super(texto);

    }
    crearElemento() {
        const inputEmail = document.createElement('input');
        inputEmail.setAttribute('type', 'email');
        inputEmail.setAttribute('placeholder', this.texto);
        return inputEmail;
    }
}
class Boton extends Inputs {
    constructor(texto) {
        super(texto);

    }
    crearElemento() {
        const boton = document.createElement('button');
        boton.setAttribute('type', 'submit');
        boton.textContent = this.texto;
        return boton;
    }
}

//Instanciar Formulario
const formulario = new Formulario();

formulario.agregarCampo('text', 'añade tu Nombre');
formulario.agregarCampo('text', 'añade tu Apellido');
formulario.agregarCampo('email', 'añade tu correo');
formulario.agregarCampo('button', 'Enviar formulario');



//renderizar en el html
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('prueba').appendChild(formulario.obtenerFormulario());
});
