import { Serie } from "./serie.js";
import { series } from "./data.js";
var seriesTbody = document.getElementById('series');
var promSeasons = document.getElementById('prom-seasons');
renderSeriesInTable(series);
var averageSeasons = calcularPromedioSeasons(series);
mostrarPromedioSeasons(averageSeasons);
function renderSeriesInTable(series) {
    console.log(series);
    console.log('Desplegando cursos');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = " <td>".concat(serie.id, "</td>\n                            <td>").concat(serie.name, "</td>\n                            <td>").concat(serie.channel, "</td>\n                            <td>").concat(serie.seasons, "</td>");
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
//# sourceMappingURL=main.js.map