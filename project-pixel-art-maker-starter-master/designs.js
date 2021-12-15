// Select color input

var color = document.getElementById('colorPicker');

// Select size input

var height = document.getElementById('inputHeight').value;
var width = document.getElementById('inputWidth').value;

// When size is submitted by the user, call makeGrid()

var size = document.getElementById('sizePicker');
size.addEventListener('submit', makeGrid);

function makeGrid() {

  const tbl = document.getElementById('pixelCanvas');

  for (let i = 0; i < height; i++) {
    var row = document.createElement('tr');
    for (let e = 0; e < width; e++) {
      var cell = document.createElement('td');
        row.appendChild(cell);
    }
    tbl.appendChild(row);
  }
}
