function translator () {
	var vowels  = ["a", "e", "i", "o", "u"];
	var vowelArray = [];
	var firstVowel = '';
	function findVowel(word) {
		word = word.split('');
		pigWord = '';
		begWord = '';
		fullPig = '';
		for (var i=0; i<word.length; i++){
				vowelArray.push(vowels.indexOf(word[i]));
				}
		for (var j=0; j<vowelArray.length; j++){
			if(vowelArray[j] > -1){
			firstVowel = j;
			break;
				}
		}
		pigWord = word.splice(firstVowel).join('');
		begWord = word.splice(0, firstVowel).join('');
		fullPig = pigWord + begWord + 'ay';
		return fullPig;
	}
	function unPig(word) {
		word = word.split('');
		word.pop();
		word.pop();
		var firstLetter = word.pop();
		var english = firstLetter + word.join('');
		return english;
	}
	return {
		findVowel,
		unPig
	};
}
