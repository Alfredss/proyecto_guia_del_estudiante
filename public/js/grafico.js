console.log("hola");
var lineChartData = {
    labels: ["100-I", "100-II", "200-I", "200-II", "300-I", "300-II", "400-I", "400-II", "500-I", "500-II"],
    datasets: [{
        label: "Serie de datos",
        fillColor: "rgba(151,187,205,0.2)",
        strokeColor: "#e9e225",
        pointColor: "#faab12",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
        // CAPTURA DE LOS DATOS DE LA BD
        data: [12, 13, 14, 13, 15, 14, 12, 11, 14, 13]
    }]
}
var ctx4 = document.getElementById("chart-area1").getContext("2d");
window.myPie = new Chart(ctx4).Line(lineChartData, {
    responsive: true
});