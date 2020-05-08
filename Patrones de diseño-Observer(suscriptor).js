//Observer patron de comportamiento(Suscriptor-publicador)

let observer = {
    /**
     * Metodo que suscribe a las ofertas
     * @param {callback} callback 
     */
    obtenerOfertas: function (callback) {
        if (typeof callback === "function") {
            this.subscribers[this.subscribers.length] = callback;
        }
    },
    /**
     * Metodo que revisa las personas suscritas,valida que este suscrita y la borra de la suscripcion
     * @param {callback} callback 
     */
    cancelarOfertas: function (callback) {
        for (let i = 0; i < this.subscribers.length; i ++) {
            if (this.subscribers[i] === callback) {
                delete this.subscribers[i];
            }
        }
    },
    /**
     * Metodo que publica la oferta entre todo los suscriptores
     * @param {*} oferta 
     */
    publicarOferta: function (oferta) {
        for (let i = 0; i < this.subscribers.length; i ++) {
            if (typeof this.subscribers[i] === 'function') {
                this.subscribers[i](oferta);
            }
        }
    },
    /**
     * Crea un nuevo vendedor
     * @param {Object} objeto informacion del nuevo vendedor recibida por parametro
     */
    crear: function (objeto) {
        for (let i in this) {
            if (this.hasOwnProperty(i)) {
                objeto[i] = this[i];
                objeto.subscribers = [];
            }

        }
    }

}
//Vendedores
const udemy = {
    nuevoCurso: function () {
        const curso = 'Nuevo curso de Java';
        this.publicarOferta(curso);
    }
}

const facebook = {
    nuevoAnuncio: function () {
        const oferta = 'Compra un celular';
        this.publicarOferta(oferta);
    }
}

//Crear los publicadores

observer.crear(udemy);
observer.crear(facebook);

//crear los suscriptores
const juan = {
    compartir: function (oferta) {
        console.log('Juan dice Excelente oferta ' + oferta);

    }
};
const Anna = {
    interesa: function (oferta) {
        console.log('Anna dice Me interesa la oferta de ' + oferta);

    }
}


udemy.obtenerOfertas(juan.compartir);
udemy.obtenerOfertas(Anna.interesa);
udemy.nuevoCurso();
udemy.cancelarOfertas(Anna.interesa);
udemy.nuevoCurso();

facebook.obtenerOfertas(Anna.interesa);
facebook.nuevoAnuncio();