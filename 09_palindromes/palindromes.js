const palindromes = function (str) {
	const newStr = str.replaceAll(/([^a-zA-Z0-9])|(_)/g, '').toLowerCase();
	const reversedNewStr = newStr.split("").reverse().join("");
	if (newStr === reversedNewStr) {
		return true;
	} else {
		return false;
	}
};

// Do not edit below this line
module.exports = palindromes;
