let $drawing = $('#drawing'),
    $drawingSelect = $('#select-drawing'),
    $colorSelect = $('#select-color');

let color = $colorSelect[0].value;
console.log($colorSelect);

$drawingSelect.change(function(event) {
  $drawing.load(event.target.value);
});

$colorSelect.change(function(event) {
  color = event.target.value;
});

$drawing.click(function(event) {
  event.target.style.fill = color;
});

//trigger change event:
$drawingSelect.trigger('change');

//undo sample 1
//undo color fill// doesnt work
//$drawing.doubleclick(function(event) {
//  event.target.style.undo = color;
//});

//undo sample 2
//doesnt work
//$colorSelect.undo(function(event) {
//  color = event.target.value;
//});//



//code sample for undo draw //
//function undoLastPoint() {

    // remove the last drawn point from the drawing array
  //  let lastPoint=points.pop();

    // add the "undone" point to a separate redo array
//    redoStack.unshift(lastPoint);

    // redraw all the remaining points
//    redrawAll();
//}
