// Back-End Logic
var pigLatinize = function(_input){
  var output = _input;

  if(testAlpha(output)){
    output += "ay";
  }

  

  return output;
};

function testAlpha (_input){
  for (var i = 0; i < _input.length; i++) {
    if(_input.charCodeAt(i) < 65
      || _input.charCodeAt(i) > 122
      || (_input.charCodeAt(i) > 90 && _input.charCodeAt(i) < 97)){
        return false;
    }
  }
  return true;
}




// Front-End Logic
$(document).ready(function() {
  $("form#form-pl").submit(function(event) {
    event.preventDefault();
    var input = $("input#input").val();
    $("#output").text(pigLatinize(input));
  });
});
