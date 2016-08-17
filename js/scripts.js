// Back-End Logic
var pigLatinize = function(_input){

  

  return _input;
};






// Front-End Logic
$(document).ready(function() {
  $("form#form-pl").submit(function(event) {
    event.preventDefault();
    var input = $("input#input").val();
    var output = pigLatinize(input);
    $("#output").text(output);
  });
});
