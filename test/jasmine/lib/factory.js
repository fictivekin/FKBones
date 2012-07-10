define([], function() {
	var Factory = {
		randomInt: function(min, max) {
			min = min || 0;
			max = max || 10;
			return min + Math.floor(Math.random()*(max-min));
		},
		randomWord: function(length) {
			var consonants = 'bcdfghjklmnpqrstvwxyz',
				vowels = 'aeiou',
				rand = function(limit) {
					return Math.floor(Math.random()*limit);
				},
				i, word='';
			consonants = consonants.split('');
			vowels = vowels.split('');
			length = parseInt(length,10);
			for (i=0;i<length/2;i++) {
				var randConsonant = consonants[rand(consonants.length)],
				randVowel = vowels[rand(vowels.length)];
				word += (i===0) ? randConsonant.toUpperCase() : randConsonant;
				word += i*2<length-1 ? randVowel : '';
			}
			return word;
		},
		randomMonth: function() {
			var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
			return months[Factory.randomInt(0, 12)];
		}
	};
	return Factory;
});