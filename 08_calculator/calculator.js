const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	return numbers.reduce((sum, number) => sum + number, 0);
};

const multiply = function(numbers) {
	return numbers.reduce((mult, number) => mult * number, 1);
};

const power = function(num, pow) {
	let total = 1;
	for (let i = 0; i < pow; i++) {
		total *= num;
	}
	return total;
};

const factorial = function(num) {
	let total = 1;
	for (num; 0 < num; num--) {
		total *= num;
	}
	return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
