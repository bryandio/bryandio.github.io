$(function() {

    var arr = [2, 5, 6, 10, 16, 7, 8];
    var shapes = ["Circle", "Square", "Rectangle", "Trapezoid", "Triangle", "Rhombus", "Octagon"];

    $(".q1-function").click(function() {
        output();
        
    });

    $(".q2-function").click(function() {
        //GET NUMBER FROM INPUT BOX
        //CALL listElements
    });
    $(".q3-function").click(function() {
        //CALL fillArray
    });
    $(".q4-function").click(function() {
        //CALL pairingArrays
    });
});

var output = function outputEvens() {
    var arr = [2, 5, 6, 10, 16, 7, 8];
    for(i = 0; i < arr.length; i+=2)
      $(".q1-output").append(arr[i] + "<br>");
};

var listElements = function listElements(n) {
  var shapes = ["Circle", "Square", "Rectangle", "Trapezoid","Triangle", "Rhombus", "Octagon"];
    for(i = 0; i < n.length; i++)
    $(".q2-output").append(shapes[i] + "<br>");
};

var fillArray = function() {


}
var pairingArrays = function() {

}