const palindromes = function (str) {
	const newStr = str.toLowerCase().replaceAll(/([^a-z0-9])|(_)/g, '');
	const reversedNewStr = newStr.split("").reverse().join("");
	return newStr === reversedNewStr;
};

// Do not edit below this line
module.exports = palindromes;
