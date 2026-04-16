import { Serie } from "./serie.js";
import { series } from "./data.js";

let seriesTbody: HTMLElement = document.getElementById('series')!;
let promSeasons: HTMLElement = document.getElementById('prom-seasons')!;
let serieName: HTMLElement = document.getElementById('serie-name')!;
let serieChannel: HTMLElement = document.getElementById('serie-channel')!;
let serieSeasons: HTMLElement = document.getElementById('serie-seasons')!;
let serieDescription: HTMLElement = document.getElementById('serie-description')!;
let serieLink: HTMLElement = document.getElementById('serie-link')!;
let seriePoster: HTMLElement = document.getElementById('poster')!;

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
    trElement.addEventListener('click', () => {
            updateCardDetails(serie);
        });

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

function updateCardDetails(serie: Serie): void {
    const imgElement = seriePoster as HTMLImageElement;
    

    imgElement.src = serie.poster as string; 
    imgElement.alt = `${serie.name} Poster`;
    serieName.textContent = `Nombre: ${serie.name}`;
    serieDescription.textContent = `Descripción: ${serie.description}`;
    serieChannel.textContent = `Canal: ${serie.channel}`;
    serieSeasons.textContent = `Temporadas: ${serie.seasons}`;
    serieLink.innerHTML = `<a href="${serie.webpage}" class="btn btn-primary" target="_blank">Ver más</a>`;
}