const form = document.querySelector('form').addEventListener('submit', mandarDatos);

function mandarDatos(e) {
    e.preventDefault()
    const nombre = document.querySelector('#nombre').value;
    const constraseña = document.querySelector('#password').value;
    const content = document.getElementById('content')
    let url = "load.php"
    let formaData = new FormData();
    formaData.append("nombre", nombre);
    formaData.append("pass", constraseña);
    fetch(url, {
        method: "POST",
        body: formaData
    }).then(response => response.json())
        .then(data => {
            content.innerHTML = data;
        })
}