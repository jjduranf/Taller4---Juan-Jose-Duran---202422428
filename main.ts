import { Serie } from "./serie";
import { series } from "./data";

let seriesTbody: HTMLElement = document.getElementById('series')!;
let promSeasons: HTMLElement = document.getElementById('prom-seasons')!;

renderSeriesInTable(series);

const averageSeasons = calcularPromedioSeasons(series);
mostrarPromedioSeasons(averageSeasons);

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

function calcularPromedioSeasons(series: Serie[]): number {
    let totalSeasons = series.reduce((total, serie) => total + serie.seasons, 0);
    return totalSeasons / series.length;
}

function mostrarPromedioSeasons(promedio: number): void {
    promSeasons.textContent = `Seasons average: ${promedio}`;
}

