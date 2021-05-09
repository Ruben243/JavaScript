document.addEventListener("DOMContentLoaded", traerNombres);

function traerNombres(e) {
    e.preventDefault();


    fetch('https://randomuser.me/api/?results=100')

    .then(response => response.json())
        .then(data => {
            const gente = data.results;
            console.log(gente);
            let html = ``;
            gente.forEach(nombre => {
                html += `
             <div class = "grid-element" >
                <img src=${nombre.picture.large} alt="">
                <div class = "grid__text" >
                    <p>Gender: ${nombre.gender }</p>
                    <p>Name: ${nombre.name.first }</p>
                    <p>Last name: ${nombre.name.last }</p>
                    <p>Age: ${nombre.dob.age}</p>
                    <p>City: ${nombre.location.city }</p>
                </div>
            </div>`;


                console.log(nombre);
            });

            const contenedor = document.querySelector('.contenedor');

            contenedor.innerHTML += html

        });











}