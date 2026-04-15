import { Serie } from "./serie";
import { series } from "./data";

let seriesTbody: HTMLElement = document.getElementById('series')!;

renderSeriesInTable(series);

function renderSeriesInTable(series: Serie[]): void {
    console.log(series);
    console.log('Desplegando cursos');
    series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = ` <td>${serie.id}</td>
                            <td>${serie.name}</td>
                            <td>${serie.channel}</td>
                            <td>${serie.seasons}</td>`;
    seriesTbody.appendChild(trElement);
  });
}