const YOUR_API_KEY = "d20a2751cd454b50a27c99a99b6585f0";
const PAGE_SIZE = 12;
let currentPage = 1;

const PLATFORMS_URL = `https://api.rawg.io/api/platforms?key=${YOUR_API_KEY}`;
let GAMES_URL = `https://api.rawg.io/api/games?key=${YOUR_API_KEY}&dates=2019-09-01,2019-09-30&platforms=18,1,7&page_size=${PAGE_SIZE}&page=${currentPage}`;

function fetchData(url) {
  return fetch(url, {
    headers: {
      Authorization: `Bearer ${YOUR_API_KEY}`,
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error al obtener datos de la API:", error);
    });
}

function updateGames() {
  fetchData(GAMES_URL).then((gameData) => {
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
    });
    document.getElementById("cartas").innerHTML = html;
  });
}

fetchData(PLATFORMS_URL).then((platformData) => {
  console.log("Datos de plataformas:", platformData);
});

updateGames();

// Manejar clic en "Siguiente" y "Anterior"
document.getElementById("nextPage").addEventListener("click", function () {
  currentPage++;
  GAMES_URL = `https://api.rawg.io/api/games?key=${YOUR_API_KEY}&dates=2019-09-01,2019-09-30&platforms=18,1,7&page_size=${PAGE_SIZE}&page=${currentPage}`;
  updateGames();
});

document.getElementById("prevPage").addEventListener("click", function () {
  if (currentPage > 1) {
    currentPage--;
    GAMES_URL = `https://api.rawg.io/api/games?key=${YOUR_API_KEY}&dates=2019-09-01,2019-09-30&platforms=18,1,7&page_size=${PAGE_SIZE}&page=${currentPage}`;
    updateGames();
  }
});


