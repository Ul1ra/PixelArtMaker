$(document).ready(function () { // Makes it possible to start to manipulate the document
  $('#sizePicker').submit(function makeGrid(grid) {  // Creates the grid upon clicking the button 'Submit'
    $('table tr').remove(); // Lets the grid be cleared when hitting the 'Submit' button again
    var row_input = $('#input_height').val(); // Allows the user to add a chosen value inside the input box to add rows 
    var col_input = $('#input_width').val(); // Allows the user to add a chosen value inside the 2nd input box to add columns
    for (var i = 1; i <= row_input; i++) { 
      $('table').append("<tr></tr>"); // This loop creates a row of cells
      for (var j = 1; j <= col_input; j++) {
        $('tr:last').append("<td></td>"); // This loop adds a cell after every row
        $('td').attr("class", 'cells') // For every 'td', a class of 'cells' is created
      }
    }
    grid.preventDefault(); // Prevents the grid to be deleted after it is created

    $('.cells').click(function (event) { // The function allows the user to color a cell on click
      var paint = $('#colorPicker').val();
      $(event.target).css('background-color', paint); // Lets the chosen color on a click event to be added to the grid
    });
  }); 
});
