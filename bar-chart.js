$(document).ready(function() {
  // Specify data, options, and element to create chart in
  let data = [9, 12, 34, 56, 98];
  let options = {
    title: "Chart Title",
    yAxisTitle: "Y Axis Title",
    xAxisTitle: "X Axis Title"
  };
  let element = ".chartContainer";

  // Create chart
  drawBarChart(data, options, element);

  // Draw individual chart components
  function drawBarChart(data, options, element) {
    drawChartTitle(options.title);
    drawYAxisTitle(options.yAxisTitle);
    drawYAxis(data);
    drawChartGrid(data);
    drawXAxis(data);
    drawXAxisTitle(options.xAxisTitle);
    // createData(data);
  }

  function drawChartTitle(title) {
    $(".chartContainer").append("<div class='chartTitle'>" + title + "</div>");
  }

  function drawYAxisTitle(title) {
    $(".chartContainer").append("<div class='yAxisTitle'>" + title + "</div>");
  }

  function drawYAxis(data) {
    $(".chartContainer").append("<div class='yAxis'></div>");
    let maximum = Math.max.apply(null, data);
    $(".yAxis").append("<div class='yAxisLabel'>" + maximum + "</div>");
    $(".yAxis").append("<div class='yAxisLabel'>" + maximum * 0.8 + "</div>");
    $(".yAxis").append("<div class='yAxisLabel'>" + maximum * 0.6 + "</div>");
    $(".yAxis").append("<div class='yAxisLabel'>" + maximum * 0.4 + "</div>");
    $(".yAxis").append("<div class='yAxisLabel'>" + maximum * 0.2 + "</div>");
    $(".yAxis").append("<div class='yAxisLabel'>" + 0 + "</div>");
  }

  function drawChartGrid(data) {
    $(".chartContainer").append("<div class='chartGrid'></div>");
    $(".chartGrid").append("<div class='bar'></div>");
    $(".chartGrid").append("<div class='bar'></div>");
    $(".chartGrid").append("<div class='bar'></div>");
    $(".chartGrid").append("<div class='bar'></div>");
    $(".chartGrid").append("<div class='bar'></div>");
  }

  function drawXAxis(data) {
    $(".chartContainer").append("<div class='emptyBox'></div>");
    $(".chartContainer").append("<div class='xAxis'></div>");
    $(".xAxis").append("<div class='xAxisLabel'>Label1</div>");
    $(".xAxis").append("<div class='xAxisLabel'>Label2</div>");
    $(".xAxis").append("<div class='xAxisLabel'>Label3</div>");
    $(".xAxis").append("<div class='xAxisLabel'>Label4</div>");
    $(".xAxis").append("<div class='xAxisLabel'>Label5</div>");
  }

  function drawXAxisTitle(title) {
    $(".chartContainer").append("<div class='xAxisTitle'>" + title + "</div>");
  }

  // function createData(data) {
  //   $(".chartContainer").append("<div class='dataContainer'></div>");
  //   $(".dataContainer").css("position", "relative");

  //   let maximum = Math.max.apply(null, data);

  //   for (let i = 0; i < data.length; i++) {
  //     $(".dataContainer").append("<div class='dataBar" + i + "'></div>");

  //     let heightFraction = data[i] / maximum * 100;
  //     $(".dataBar" + i).css("height", heightFraction + "%");

  //     $(".dataBar" + i).css("width", "10%");
  //     $(".dataBar" + i).css("background-color", "green");
  //     $(".dataBar" + i).css("display", "inline-block");
  //     $(".dataBar" + i).css("position", "absolute");
  //     $(".dataBar" + i).css("bottom", "0");
  //     $(".dataBar" + i).css("border", "1px solid black");
  //     $(".dataBar" + i).css("margin-left", i * 20 + "%");
  //   }
  // }













});
