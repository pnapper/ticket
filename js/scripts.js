var add = function(number1, number2) {
  return number1 + number2;
};

var sub = function(number1, number2) {
  return number1 - number2;
};

var mult = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};


$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    $("#outputAdd").text(add(number1, number2));
  });
  $("form#subtract").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#sub1").val());
    var number2 = parseInt($("#sub2").val());
    $("#outputSubtract").text(sub(number1, number2));
  });
  $("form#multiply").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#mul1").val());
    var number2 = parseInt($("#mul2").val());
    $("#outputMultiply").text(mult(number1, number2));
  });
  $("form#divide").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#div1").val());
    var number2 = parseInt($("#div2").val());
    $("#outputDivide").text(divide(number1, number2));
  });
});
