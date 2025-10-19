import { Serie } from "./Serie.js";
import { dataSeries } from "./dataSeries.js";
var seriesTBody = document.getElementById('series');
//const btnfilterByName: HTMLElement = document.getElementById("btton-filterByName")!;
//const inputSearchBox: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box")!;
//btnfilterByName.onclick = () => applyFilterByName();
/*<td><a href="${serie.linkSerie}" target="_blank">${serie.name}</a></td>*/
renderSeriesInTable(dataSeries);
function renderSeriesInTable(series) {
    console.log("Desplegando series");
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>   \n                              <td>").concat(serie.name, "</td>\n                              <td>").concat(serie.channel, "</td>\n                              <td>").concat(serie.seasons, "</td>");
        //seriesTBody.appendChild(trElement);
        trElement.addEventListener("click", function () { return showInfoSerie(serie); });
        seriesTBody.appendChild(trElement);
    });
    var promedio = seasonsAverage(series);
    var promedioElement = document.getElementById("total-seasons");
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
function showInfoSerie(serie) {
    var card = document.getElementById("card");
    var img = document.getElementById("card-img");
    var tit = document.getElementById("card-title");
    var text = document.getElementById("card-text");
    var link = document.getElementById("card-link");
    card.style.display = "block";
    //Esto se hace para que cargue la imagen y se pueda mostrar :)
    var nuevaUrl = "https://images.weserv.nl/?url=";
    img.src = nuevaUrl + serie.img.replace("https://", "");
    img.alt = serie.name;
    tit.textContent = serie.name;
    text.textContent = serie.descp;
    link.href = serie.linkSerie;
}
function seasonsAverage(series) {
    var sumaTotalSeasons = 0;
    //let totalSeries: number = 0;
    //series.forEach((serie) => totalSeries = totalSeries + serie.name)
    var totalSeries = series.length;
    series.forEach(function (serie) { return sumaTotalSeasons = sumaTotalSeasons + serie.seasons; });
    var seasonsAverage = 0;
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
//# sourceMappingURL=main.js.map