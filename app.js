const API_URL = 'https://rawg.io/';
const API_KEY = 'd20a2751cd454b50a27c99a99b6585f0';  // Reemplaza 'TU_API_KEY' con tu propia clave

fetch(API_URL, {
    headers: {
        'Authorization': `Bearer ${API_KEY}`
        // Agrega otros encabezados según los requisitos de la API, por ejemplo:
        // 'Content-Type': 'application/json'
    }
})
    .then(response => response.json())
    .then(data => {
        let html = "";
        data.forEach(function (game) {
            html += `
                <div class="card m-4" style="width: 15rem;">
                    <img src="${game.cover}" class="card-img-top" alt="Portada de ${game.title}">
                    <div class="card-body">
                        <h5 class="card-title">${game.title}</h5>
                        <p class="card-text">Año de lanzamiento: ${game.release_year}</p>
                        <!-- Agrega más información según la estructura de tus datos -->
                    </div>
                </div>`;
        })
        document.getElementById('cartas').innerHTML = html;
    })
    .catch(error => {
        console.error('Error al obtener datos de la API:', error);
    });

