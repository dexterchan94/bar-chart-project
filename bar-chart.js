$(document).ready(function() {
  // Specify data, options, and element to create chart in
  // let data = [
  //   ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"],
  //   0.01, 0.02, 0.03, 0.04, 0.05];
  let data = [
    ["Oatmeal Raisin", "Peanut Butter", "Chocolate Chip", "Potato", "Cake"],
    9, 12, 34, 8, 44];
  // let data = [
  //   ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"],
  //   1111, 2222, 3333, 4444, 5555];

  let options = {
    chartTitle: "Dexter's Cookie Consumption",
    yAxisTitle: "Number of Cookies",
    xAxisTitle: "Cookie Type",
    barValuePosition: "flex-start" // "flex-start" (top), "center", or "flex-end" (bottom)
  };
  let element = ".chartContainer";

  // Create chart
  drawBarChart(data, options, element);

  // Draw individual chart components
  function drawBarChart(data, options, element) {
    drawChartTitle(options.chartTitle);
    drawYAxisTitle(options.yAxisTitle);
    drawYAxis(data);
    drawChartGrid(data, options);
    drawXAxis(data);
    drawXAxisTitle(options.xAxisTitle);
  }

  // Draw chart title
  function drawChartTitle(title) {
    $(".chartContainer").append("<div class='chartTitle'>" + title + "</div>");
  }

  // Draw y-axis title
  function drawYAxisTitle(title) {
    $(".chartContainer").append("<div class='yAxisTitle'>" + title + "</div>");
  }

  // Draw y-axis labels that are properly scaled to the data and have an
  // appropriate number of decimal places
  function drawYAxis(data) {
    $(".chartContainer").append("<div class='yAxis'></div>");
    let maximum = maxScale(Math.max.apply(null, data.slice(1, data.length)));
    let order = Math.floor(Math.log(maximum) / Math.LN10
                       + 0.000000001);
    for (let i = 1; i > 0; i = i - 0.2) {
      if (order < 0) {
        $(".yAxis").append("<div class='yAxisLabel'>" + (maximum * i).toFixed(Math.abs(order-1)) + "</div>");
      } else {
        $(".yAxis").append("<div class='yAxisLabel'>" + (maximum * i).toFixed(0) + "</div>");
      }
    }
  }

  // Calculate a maximum value for the y-axis scale that is slightly larger
  // than the largest value in the dataset and is rounded nicely
  function maxScale(n) {
    let order = Math.floor(Math.log(n) / Math.LN10 + 0.000000001);
    let multiple = Math.pow(10,order);
    let result = Math.ceil(n * 1.1 / multiple) * multiple;
    if (order > 0) {
      return result;
    } else if (order == 0) {
      return result.toFixed(1);
    } else {
      return result.toFixed(Math.abs(order));
    }
  }

  // Draw chart grid and all data bars
  function drawChartGrid(data, options) {
    // Add container for data
    $(".chartContainer").append("<div class='chartGrid'></div>");

    // Calculate maximum y-axis label value
    let maximum = maxScale(Math.max.apply(null, data.slice(1, data.length)));

    // Calculate bar width
    let barWidth = 100 / (data.length + 2);

    // Add data bars
    for (let i = 1; i < data.length; i++) {
      $(".chartGrid").append("<div class='bar bar" + i + "'></div>");
      let height = data[i] / maximum * 100;
      $(".bar" + i).css("height", height + "%");
      $(".bar" + i).css("width", barWidth + "%");
      $(".bar" + i).append("<p class='barValue'>" + data[i] + "</p>");
      $(".barValue").css("align-self", options.barValuePosition);
    }
  }

  // Draw x-axis labels
  function drawXAxis(data) {
    $(".chartContainer").append("<div class='emptyBox'></div>");
    $(".chartContainer").append("<div class='xAxis'></div>");

    let barWidth = 100 / (data.length + 2);

    for (let i = 0; i < data[0].length; i++) {
      $(".xAxis").append("<div class='xAxisLabel'>" + data[0][i] + "</div>");
      $(".xAxisLabel").css("width", barWidth + "%");
    }
  }

  // Draw x-axis title
  function drawXAxisTitle(title) {
    $(".chartContainer").append("<div class='xAxisTitle'>" + title + "</div>");
  }








});
