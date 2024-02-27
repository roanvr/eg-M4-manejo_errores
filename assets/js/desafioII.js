const urlApi = 'https://randomuser.me/api/?results=5000';

//llamado a la API
(async function getData(){
    const respuesta = await fetch(urlApi);
    const { results } = await respuesta.json();

    let mostrarDatos = '';
    let user = document.getElementById('user-data');
    results.forEach(item => {
    mostrarDatos += `
    <div>
        <img src="${item.picture.large}">
        <p>${item.name.first} ${item.name.last}</p>
        <p>${item.email}</p>
        <p>${item.cel}</p>
    </div>
    `
});
    user.innerHTML = mostrarDatos;
})();




