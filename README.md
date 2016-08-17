# _Pig Latin Translator_

#### _Website to translate text input into Pig Latin, practicing BDD and JS logic; an exercise for Epicodus, August 17, 2016_

#### By _**Thomas Rivas & Zachary Matthewstearn**_

## Description

_This website takes input from the user as text and displays output text to the page consisting of the original input translated into Pig Latin, as described in the following specifications (note that unless otherwise specified, "y" is considered to be a vowel):_

* _The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels._
  * _Example Input: 3_
  * _Example Output: 3_

* _The program adds "ay" to any lower-case single-letter word._
  * _Example Input: i_
  * _Example Output: iay_

* _The program adds "ay" to any single-letter word, regardless of case._
  * _Example Input: N_
  * _Example Output: Nay_

* _The program adds "ay" to multi-letter words beginning with a vowel, still regardless of case (case-insensitivity to persist hereafter)._
  * _Example Input: in_
  * _Example Output: inay_

* _For words beginning with a consonant, the program moves the first consonant to the end and adds "ay" afterwards._
  * _Example Input: ni_
  * _Example Output: inay_

* _For words beginning with multiple consonants, the program moves the first consecutive consonants to the end and adds "ay" afterwards._
  * _Example Input: Sni_
  * _Example Output: iSnay_

* _For words beginning with "qu", the program moves the first "q" AND the "u" to the end and adds "ay" afterwards._
  * _Example Input: queal_
  * _Example Output: ealquay_

* _For words beginning with multiple consonants, where the final consonant of that first set is a "q" followed by a "u", the program moves the first consecutive consonants AND the "u" to the end and adds "ay" afterwards._
  * _Example Input: Squeal_
  * _Example Output: ealSquay_

* _For words beginning with "y", followed by a vowel, the program moves the first "y" to the end and adds "ay" afterwards._
  * _Example Input: yahoo_
  * _Example Output: ahooyay_

* _For words beginning with "y", and followed by one or more other consonants before a vowel, the program moves the first "y" and following consonants to the end and adds "ay" afterwards._
  * _Example Input: yggdrasil_
  * _Example Output: asilyggdray_

## Setup/Installation Requirements

* _Clone this repository_
* _open in your text editor of choice_

## Known Bugs

_{EDIT THIS IF THERE ARE BUGS!!!!!!!!}_

## Technologies Used

* _HTML_
* _CSS_
* _JS_
* _jQuery_

### License

Copyright (c) 2016 **_Thomas Rivas & Zachary Matthewstearn_**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
