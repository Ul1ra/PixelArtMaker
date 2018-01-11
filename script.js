$(document).ready(function() {
// Select size
  $('#sizePicker').submit(function makeGrid(grid) {
    var rows = $('#input_height').val();
    var cols = $('#input_width').val();
      for (var i = 1; i <= rows; i++) {
        $('table').append("<tr></tr>");
        for (var j = 1; j <= cols; j++) {
          $('tr:last').append("<td></td>");
          $('td').attr("class", 'cell');
        }
      }
      grid.preventDefault();
  });
// Select color
  $('#pixel_canvas').click('.cell', function() {
    var paint = $('#colorPicker').val();
    $('#pixel_canvas').css('background-color', paint);
  }); 

});
