/*jshint esversion: 6*/

module.exports = () => {
	var vowels  = ["a", "e", "i", "o", "u"];
  function piggy (word) {
    word = word.split('');
	  var vowelArray = [];
	  var firstVowel = '';
		var pigWord = '';
		var begWord = '';
		var fullPig = '';

    // Creates index of all letters in word, with vowels > 0
		for (var i = 0; i < word.length; i++){
				vowelArray.push(vowels.indexOf(word[i]));
				}

    // finds first vowel in array as index of word
		for (var j=0; j<vowelArray.length; j++){
			if(vowelArray[j] > -1){
			firstVowel = j;
      break;
        }
    }

    // Ignores words with no vowels
    if(firstVowel === "" ){
      return word.join('');
    }

    console.log(vowelArray);

		pigWord = word.splice(firstVowel).join('');
		begWord = word.splice(0, firstVowel).join('');
		fullPig = pigWord + '-' + begWord + 'ay';
    console.log(fullPig);
		return fullPig;
	}
	function unPig(word) {
		word = word.split('');
		if(word[word.length - 1] === 'y' && word[word.length - 2] === 'a'){
		word.pop();
		word.pop();
    //console.log(word);
    var begWordUP = word.pop();
    //console.log(begWordUP);
    //console.log(word);
    for (var i= word.length -1; i >= 0; i--) {
      if ( word[i] !== '-'){
        nextLetter = word.pop();
        begWordUP += nextLetter;
        nextLetter = null;
      } else {
        break;
      }
      //console.log(begWordUP);
    }
      console.log(begWordUP);
      console.log(word);
		var english = begWordUP.split('').reverse().join('') + word.join('');
    english = english.split('');
    english.splice(english.length-1,1);

		return english.join('');
	 }
	}
	return {
		piggy,
		unPig
	};
};


var key = module.exports();
//console.log(key.unPig('oyleDay'));
/*key.piggy('snow');
key.piggy('doyle');
key.piggy('basketball');*/
//key.unPig('ow-snay');
key.unPig('oyle-day');
