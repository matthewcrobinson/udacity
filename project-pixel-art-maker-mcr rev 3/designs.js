
//creates listener on sizePicker and passes current height and width values to makeGrid function

var size = document.getElementById('sizePicker');
size.addEventListener('submit', function (event) {
  event.preventDefault();
  var height = document.getElementById('inputHeight').value;
  var width = document.getElementById('inputWidth').value;
  makeGrid(height, width);
});

function makeGrid(height, width) {

  var tbl = document.getElementById('pixelCanvas');
  var tblbody = document.querySelector('tbody');
  if (tblbody !== null) {
    tblbody.remove();
    for (let i = 0; i < height; i++) {
      var row = tbl.insertRow(-1);
      for (let e = 0; e < width; e++) {
        var cell = row.insertCell(0);
      }
    }
  }
  else {
    for (let i = 0; i < height; i++) {
      var row = tbl.insertRow(-1);
      for (let e = 0; e < width; e++) {
        var cell = row.insertCell(0);
      }
    }
  }
  var newCells = document.querySelectorAll('td');
  for (var square of newCells) {
    square.addEventListener('click', function draw() {
      var color = document.getElementById('colorPicker').value;
      this.style.backgroundColor = color;
    })
  }
}
