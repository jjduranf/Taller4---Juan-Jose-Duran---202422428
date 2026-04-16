import { Serie } from "./serie.js";
import { series } from "./data.js";
var seriesTbody = document.getElementById('series');
var promSeasons = document.getElementById('prom-seasons');
var serieName = document.getElementById('serie-name');
var serieChannel = document.getElementById('serie-channel');
var serieSeasons = document.getElementById('serie-seasons');
var serieDescription = document.getElementById('serie-description');
var serieLink = document.getElementById('serie-link');
var seriePoster = document.getElementById('poster');
renderSeriesInTable(series);
var averageSeasons = calcularPromedioSeasons(series);
mostrarPromedioSeasons(averageSeasons);
function renderSeriesInTable(series) {
    console.log(series);
    console.log('Desplegando cursos');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = " <td>".concat(serie.id, "</td>\n                            <td>").concat(serie.name, "</td>\n                            <td>").concat(serie.channel, "</td>\n                            <td>").concat(serie.seasons, "</td>");
        trElement.addEventListener('click', function () {
            updateCardDetails(serie);
        });
        seriesTbody.appendChild(trElement);
    });
}
function calcularPromedioSeasons(series) {
    var totalSeasons = series.reduce(function (total, serie) { return total + serie.seasons; }, 0);
    return totalSeasons / series.length;
}
function mostrarPromedioSeasons(promedio) {
    promSeasons.textContent = "Seasons average: ".concat(promedio);
}
function updateCardDetails(serie) {
    var imgElement = seriePoster;
    imgElement.src = serie.poster;
    imgElement.alt = "".concat(serie.name, " Poster");
    serieName.textContent = "Nombre: ".concat(serie.name);
    serieDescription.textContent = "Descripci\u00F3n: ".concat(serie.description);
    serieChannel.textContent = "Canal: ".concat(serie.channel);
    serieSeasons.textContent = "Temporadas: ".concat(serie.seasons);
    serieLink.innerHTML = "<a href=\"".concat(serie.webpage, "\" class=\"btn btn-primary\" target=\"_blank\">Ver m\u00E1s</a>");
}
//# sourceMappingURL=main.js.map