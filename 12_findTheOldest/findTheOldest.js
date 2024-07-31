const findTheOldest = function(people) {
	/* 	
	1. Loop through all the people (map, filter, reduce)
	2. Order the people from oldest to youngest (sort)
	3. Return the name of the first person on that list.
	*/

	const today = new Date().getFullYear();
	
	return (people
		.filter(person => person.yearOfBirth && person.yearOfDeath ? person.yearOfDeath : person.yearOfDeath = today)
		.sort((a,b) => (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth))[0]
	);
};

// Do not edit below this line
module.exports = findTheOldest;
