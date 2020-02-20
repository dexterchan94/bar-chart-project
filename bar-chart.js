$(document).ready(function() {
  // Specify data, options, and element to create chart in
  let data = [1, 2, 3, 4, 5];
  let options = {
    title: "Chart Title"
  };
  let element = "#chartContainer";

  // Create chart
  drawBarChart(data, options, element);

  function drawBarChart(data, options, element) {
    drawChartTitle(options.title);
    createData(data);
  }




  function drawChartTitle(title) {
    $("#chartContainer").append("<p class='chartTitle'>" + title + "</p>");
  }

  function createData(data) {
    $("#chartContainer").append("<div class='dataContainer'></div>");
    $(".dataContainer").css("position", "relative");

    let maximum = Math.max.apply(null, data);

    for (let i = 0; i < data.length; i++) {
      $(".dataContainer").append("<div class='dataBar" + i + "'></div>");

      let heightFraction = data[i] / maximum * 100;
      $(".dataBar" + i).css("height", heightFraction + "%");

      $(".dataBar" + i).css("width", "10%");
      $(".dataBar" + i).css("background-color", "green");
      $(".dataBar" + i).css("display", "inline-block");
      $(".dataBar" + i).css("position", "absolute");
      $(".dataBar" + i).css("bottom", "0");
      $(".dataBar" + i).css("border", "1px solid black");
      $(".dataBar" + i).css("margin-left", i * 20 + "%");
    }
  }













});
