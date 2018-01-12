$(document).ready(function () { // Now the code will be executed

  $('#sizePicker').submit(function makeGrid(grid) { // Clicking on submit creates a single grid
    $('table tr').remove(); // Clicking on Submit again removes the colored squares
    var rows = $('#input_height').val();
    var cols = $('#input_width').val();
    for (var i = 1; i <= rows; i++) {
      $('table').append("<tr></tr>"); // The for loop creates a row of pixels multiplied by the input value of heights
      for (var j = 1; j <= cols; j++) {
        $('tr:last').append("<td></td>"); // This for loop creates the 
        $('td').attr("class", 'cells')
      }
    }
    grid.preventDefault();

    $('.cells').click(function (event) {
      var paint = $('#colorPicker').val();
      $(event.target).css('background-color', paint);
    });
  });
});
