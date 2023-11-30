// Coloca tu clave de API aquí
const YOUR_API_KEY = 'd20a2751cd454b50a27c99a99b6585f0';

// URL para obtener información de plataformas
const PLATFORMS_URL = `https://api.rawg.io/api/platforms?key=${YOUR_API_KEY}`;

// URL para obtener información de juegos con fechas y plataformas específicas
const GAMES_URL = `https://api.rawg.io/api/games?key=${YOUR_API_KEY}&dates=2019-09-01,2019-09-30&platforms=18,1,7`;

// Función para hacer una solicitud a la API
function fetchData(url) {
    return fetch(url, {
        headers: {
            'Authorization': `Bearer ${YOUR_API_KEY}`
        }
    })
    .then(response => response.json())
    .catch(error => {
        console.error('Error al obtener datos de la API:', error);
    });
}

// Obtener datos de plataformas
fetchData(PLATFORMS_URL)
    .then(platformData => {
        // Aquí puedes procesar los datos de plataformas según tu necesidad
        console.log('Datos de plataformas:', platformData);
    });

// Obtener datos de juegos
fetchData(GAMES_URL)
    .then(gameData => {
        // Procesa los datos de juegos y genera las tarjetas
        let html = "";
        gameData.results.forEach(function (game) {
            html += `
                <div class="card m-4" style="width: 15rem;">
                    <img src="${game.background_image}" class="card-img-top" alt="Portada de ${game.name}">
                    <div class="card-body">
                        <h5 class="card-title">${game.name}</h5>
                        <p class="card-text">Fecha de lanzamiento: ${game.released}</p>
                        <!-- Agrega más información según la estructura de tus datos -->
                    </div>
                </div>`;
        })
        document.getElementById('cartas').innerHTML = html;
    });

 

