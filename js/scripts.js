// Back-End Logic

var pigLatinize = function(_input){
  var output = _input;

  if((output.charCodeAt(0) >= 65 && output.charCodeAt(0) <= 90)
    || (output.charCodeAt(0) >= 97 && output.charCodeAt(0) <= 122)){
    output += "ay";
  }

  return output;
};






// Front-End Logic
$(document).ready(function() {
  $("form#form-pl").submit(function(event) {
    event.preventDefault();
    var input = $("input#input").val();
    $("#output").text(pigLatinize(input));
  });
});
