import { Serie } from "./serie.js";
import { series } from "./data.js";
var seriesTbody = document.getElementById('series');
renderSeriesInTable(series);
function renderSeriesInTable(series) {
    console.log(series);
    console.log('Desplegando cursos');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = " <td>".concat(serie.id, "</td>\n                            <td>").concat(serie.name, "</td>\n                            <td>").concat(serie.channel, "</td>\n                            <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
//# sourceMappingURL=main.js.map