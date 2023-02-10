'use strict';

function logger() {
	console.log('My name is Tathy');
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
	console.log(apples, oranges);
	const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
	return juice;
}

fruitProcessor(5, 0);

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

//OR
console.log(fruitProcessor(5, 0));

//Function declaration
const age1 = calcAge1(1991);

function calcAge1(birthYear) {
	return 2037 - birthYear;
}

//Function expression
const calcAge2 = function (birthYear) {
	return 2037 - birthYear;
};
const age2 = calcAge2(1991);

console.log(age1, age2);

// function expression returns a value, so they have to be stored in a variable
// function declaration we can call the function and then declare it, but it doesn't work for function expression

//Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
	const age = 2037 - birthYear;
	const retirement = 65 - age;
	return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1991, 'Tathy'));
console.log(yearsUntilRetirement(1980, 'Ivn'));

//
function cutFruitPieces(fruit) {
	return fruit * 4;
}

function fruitProcessor(apples, oranges) {
	const applePieces = cutFruitPieces(apples);
	const orangePieces = cutFruitPieces(oranges);

	const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
	return juice;
}
console.log(fruitProcessor(3, 10));

//Array
const friends = ['Michael', 'Steven', 'Peter'];
const y = new Array(1991, 1984, 2008);

console.log(friends[2]);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Silva', 2037 - 1991, 'teacher', friends]; // many types of values in the same array

const calcAge = function (birthyear) {
	return 2037 - birthyear;
};
const years = [1990, 1967, 1890, 2020, 2004];

const age5 = calcAge(years[0]);
const age6 = calcAge(years[1]);
const age7 = calcAge(years[years.length - 1]);
console.log(age5, age6, age7);
//OR
const ages = [
	calcAge(years[0]),
	calcAge(years[1]),
	calcAge(years[years.length - 1]),
];
console.log(ages);

//.push (add element to the end), .pop (remove the last element), .unshift (add element to the begining ), .shift (remove the first element)

//Object
//Arrays the order of values matter. Objects are used for unestructured data (the values are accessesd by property, not by order)
const tathy = {
	firstName: 'Tathy',
	lastName: 'Max',
	age: 2023 - 1978,
	job: 'dev',
	friends: ['Dani', 'Marina', 'Ricardo'],
};

console.log(tathy.lastName);
console.log(tathy['lastName']);
const nameKey = 'Name';
console.log(tathy['first' + nameKey]);
console.log(tathy['last' + nameKey]);
//using the brackets notation we can put an expression that will get evaluated

const interestedIn = prompt(
	'What do you want to know about Tathy? Choose between firtsName, lastName, age, job, and friends'
);
console.log(tathy[interestedIn]);

if (tathy[interestedIn]) {
	console.log(tathy[interestedIn]);
} else {
	console.log(
		'Wrong requets! Choose between firtsName, lastName, age, job, and friends'
	);
}

console.log(
	`${tathy.firstName} has ${tathy.friends.length} friends, and her best friend is called ${tathy.friends[0]}`
);

//Object Methods
const liz = {
	firstName: 'Liz',
	lastName: 'Salles',
	birthYear: 2015,
	job: 'student',
	friends: ['Yuni', 'Julia', 'Mariana'],
	hasDriversLicense: false,

	calcAge: function (birthyear) {
		//name of the function is a property
		return 2037 - birthyear;
	},
};

console.log(liz.calcAge(2015));
console.log(liz['calcAge'](2015));

//Using .this
const nina = {
	firstName: 'Nina',
	lastName: 'Salles',
	birthYear: 2005,
	job: 'student',
	friends: ['Selin', 'Amanda', 'Scarlet'],
	hasDriversLicense: true,

	calcAge: function () {
		//.this keyword is equal to the object that is calling the method
		console.log(this);
		return 2037 - this.birthYear;
	},
};

console.log(nina.calcAge());

//creating the age property inside the function and calling the property directly
const enrico = {
	firstName: 'Enrico',
	lastName: 'Salles',
	birthYear: 2008,
	job: 'student',
	friends: ['Selin', 'Amanda', 'Scarlet'],
	hasDriversLicense: false,

	calcAge: function () {
		this.age = 2037 - this.birthYear;
		return this.age;
	},

	getSummary: function () {
		return `${this.firstName} is a ${this.calcAge()} -year old ${
			enrico.job
		}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
	},
};

console.log(enrico.calcAge());
console.log(enrico.age);

//Challenge
//"Enrico is a x-year old student, and he has or not a driver's license"

console.log(enrico.getSummary());

//loops
const greg = [
	'Greg',
	'Max',
	2037 - 2021,
	'cat',
	['Roscoe', 'Fuba', 'Pipoca', true],
];
const types = [];
for (let i = 0; i < greg.length; i++) {
	console.log(greg[i], typeof greg[i]);

	types[i] = typeof greg[i]; // OR types.push(typeof jonas[i])
}
console.log(types);

const years2 = [2005, 2008, 2015, 1978, 1976, 2021];
const ages2 = [];

for (let i = 0; i < years2.length; i++) {
	ages2.push(2023 - years2[i]);
}
console.log(ages2);

//continue and break
console.log('____ONLY STRINGS____');

for (let i = 0; i < greg.length; i++) {
	if (typeof greg[i] !== 'string') continue;

	console.log(greg[i], typeof greg[i]);
}

console.log('____BREAK WITH NUMBER____');

for (let i = 0; i < greg.length; i++) {
	if (typeof greg[i] === 'number') break;

	console.log(greg[i], typeof greg[i]);
}

//loops in loops
for (let exercise = 1; exercise < 4; exercise++) {
	console.log(`--------Starting exercise ${exercise}`);

	for (let rep = 1; rep < 6; rep++) {
		console.log(`Lifting weight repetition ${rep}`);
	}
}

// while loop
let rep1 = 1;
while (rep1 <= 7) {
	console.log(`WHILE: Lifting weights repetition ${rep1}`);
	rep1++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
	console.log(`You rolled a ${dice}`);
	dice = Math.trunc(Math.random() * 6) + 1;
	if (dice === 6) console.log('Loop is about to end...');
}
