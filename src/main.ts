import { Serie } from "./Serie.js";
import { dataSeries } from "./dataSeries.js";

let seriesTBody: HTMLElement = document.getElementById('series')!;
//const btnfilterByName: HTMLElement = document.getElementById("btton-filterByName")!;
//const inputSearchBox: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box")!;

//btnfilterByName.onclick = () => applyFilterByName();

renderSeriesInTable(dataSeries);

function renderSeriesInTable(series: Serie[]): void{
    console.log("Desplegando series");
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.id}</td>
                              <td><a href="${serie.linkSerie}" target="_blank">${serie.name}</a></td>
                              <td>${serie.channel}</td>
                              <td>${serie.seasons}</td>`;
        seriesTBody.appendChild(trElement);
    });

    const promedio = seasonsAverage(series);
    let promedioElement = document.getElementById("total-seasons")!;
    promedioElement.innerHTML = promedio.toFixed(0);
}



/*function applyFilterByName(){
    let text = inputSearchBox.value;
    text = (text == null) ? '' : text;
    clearSeriesInTable();
    let seriesFiltered: Serie[] = searchSerieByName(text, dataSeries);
    renderSeriesInTable(seriesFiltered);
}*/

/*function searchSerieByName(nameKey: string, series: Serie[]){
    return nameKey === '' ? dataSeries : series.filter(c => c.name.match(nameKey));
}*/

function seasonsAverage(series: Serie[]){
    let sumaTotalSeasons: number = 0;
    //let totalSeries: number = 0;
    //series.forEach((serie) => totalSeries = totalSeries + serie.name)
    const totalSeries: number = series.length;
    series.forEach((serie) => sumaTotalSeasons = sumaTotalSeasons + serie.seasons);
    let seasonsAverage: number = 0;
    seasonsAverage = sumaTotalSeasons / totalSeries;
    return seasonsAverage;
}

/*function clearSeriesInTable(){
    while (seriesTBody.hasChildNodes()){
        if(seriesTBody.firstChild != null){
            seriesTBody.removeChild(seriesTBody.firstChild);

        }
    }
}*/