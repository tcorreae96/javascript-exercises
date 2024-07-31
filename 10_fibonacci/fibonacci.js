const fibonacci = function(num) {
	if (num < 0) {
		return "OOPS";
	} else if (num === 0) {
		return 0;
	} else if (num === 1 || num == 2) {
		return 1;
	} else {
		return calculateNum(num);
	}
};

function calculateNum(num) {
	let seq = [0, 1, 1];
	// The sequence is the sum of the last 2 numbers.
	for (let i = 3; i <= num; i++) {
		let newNumber = seq[i - 1] + seq[i - 2];
		seq.push(newNumber);
	}
	return seq[num];

}

// Do not edit below this line
module.exports = fibonacci;
