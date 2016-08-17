// Back-End Logic
var vowels = ['a','e','i','o','u','y','A','E','I','O','U','Y'];

var startingConsonants = [];

var loopWords = function(_inputWords){
  console.log("this should be a string!!!!! : " + _inputWords);
  console.log(typeof _inputWords);
  _inputWords = _inputWords.split(" ");
  console.log("this should be array of individual words!!!!! : " + _inputWords);
  console.log(typeof _inputWords);
  for (var i = 0; i < _inputWords.length; i++) {
    _inputWords.push(pigLatinize(_inputWords[i]));
  }

  return _inputWords.join(" ");
};

var pigLatinize = function(_input){
  var output = _input;
  // console.log(output);
  if(testCons(_input)){
    output = output.split(""); // make the string into an array
    startingConsonants.forEach(function(consonant){ // for each consonant that we stored in "staringConsonants"...
      output.push(output.shift()); // grab the first element of the output using 'shift', shift the array forward (also a product of shift) and then push that element back onto the end
    });
    output = output.join(""); // put it back into a string
  }
  // console.log("_input === " + _input);
  if(testAlpha(_input)){
    output += "ay";
  }

  return output;
};

function testAlpha (_inputAlpha){
  for (var i = 0; i < _inputAlpha.length; i++) {
    if(_inputAlpha.charCodeAt(i) < 65
      || _inputAlpha.charCodeAt(i) > 122
      || (_inputAlpha.charCodeAt(i) > 90 && _inputAlpha.charCodeAt(i) < 97)){
        return false;
    }
  }
  return true;
}

function testCons(_inputCons) {
  startingConsonants = [];
  for (var i = 0; i < _inputCons.length; i++) {
    if(!vowels.includes(_inputCons[i])){
      startingConsonants.push(_inputCons[i]);
    }
    else {
      break;
    }
  }
  if(startingConsonants.length > 0){
    return true;
  }
  return false;
}


// Front-End Logic
$(document).ready(function() {
  $("form#form-pl").submit(function(event) {
    event.preventDefault();
    var input = $("input#input").val();
    $("#output").text(loopWords(input));
    // $("#output").text(pigLatinize(input));
  });
});
