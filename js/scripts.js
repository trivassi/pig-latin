// Back-End Logic
var vowels = ['a','e','i','o','u','y','A','E','I','O','U','Y'];

var startingConsonants = [];



function testCons(_inputCons) {
  startingConsonants = []; //empty array reinitialized when new input is submitted
  for (var i = 0; i < _inputCons.length; i++)//going through the input char by char
  {
    if(!vowels.includes(_inputCons[i])) //if not on the vowel list
    {
      startingConsonants.push(_inputCons[i]);//push into startingConsonants (new array)
    }
    else if (i === 0 && (_inputCons[0] === "y" || _inputCons[0] === "Y" )) //if first time through loop and the first letter is Y or y
    {
      startingConsonants.push(_inputCons[i]); //push into startingConsonants
    }
    else
    {
      break; //if it is a vowel get out of loop
    }
  }
  if(startingConsonants.length > 0) //if startingConsonants isnt empty return true
  {
    return true;
  }
  return false; //if havent returned already return false
}


//validating whether it is a letter
function testAlpha (_inputAlpha){
  for (var i = 0; i < _inputAlpha.length; i++)
  {
    if(_inputAlpha.charCodeAt(i) < 65
      || _inputAlpha.charCodeAt(i) > 122
      || (_inputAlpha.charCodeAt(i) > 90 && _inputAlpha.charCodeAt(i) < 97))
    {
        return false;
    }
  }
  return true;
}



function pigLatinize (_input){
  var output = _input;
  if(testCons(_input))
  {
    output = output.split(""); // make the string into an array

    startingConsonants.forEach(function(consonant)
    { // for each consonant that we stored in "staringConsonants"...
      output.push(output.shift()); // grab the first element of the output using 'shift', shift the array forward (also a product of shift) and then push that element back onto the end
    });

    if(startingConsonants[startingConsonants.length - 1] === "q")//if the last of the startingConsonants (which have already been moved to the end) is a q
    {
      if (output[0] === "u") // and if the new first element is a u
      {
        output.push(output.shift()); //shift and push of the u
        //
      }
    }

    output = output.join(""); // put it back into a string
  }
  if(testAlpha(_input))
  {
    output += "ay";
  }

  return output;
}



function loopWords(_inputWords)
{
  var outputWords = [];
  _inputWords = _inputWords.split(" ");//seperate input wherever there are spaces (where there is a " ")

  for (var i = 0; i < _inputWords.length; i++)
  {
    outputWords.push(pigLatinize(_inputWords[i])); //go through each word that was split and apply the pigLatinize function and then push them into the new array valled OutputWords
  }

  return outputWords.join(" "); //once they are pigLatinized and pushed into the new array "join" them back into a string
}





// Front-End Logic
$(document).ready(function() {
  $("form#form-pl").submit(function(event) {
    event.preventDefault();
    var input = $("input#input").val();
    $("#output").text(loopWords(input));
  });
});
