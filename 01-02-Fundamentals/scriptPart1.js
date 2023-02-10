let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null); //JS says it is an object -> it's a bug of JS

const now = 2037;
const ageJonas = now - 1991;
console.log(ageJonas);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

//type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

//type coercion
console.log('I am' + 23 + 'years old'); // + operator triggers JS to convert number to string
console.log('23' - '10' - 3); // - operator triggers JS to convert string to number
console.log('23' / '2'); // / operator triggers JS to convert string to number

let n = '1' + 1; // + operator triggers JS to convert number to string -> '11'
n = n - 1; // - operator triggers JS to convert string to number -> 10
console.log(n);

console.log(2 + 3 + 4 + '5'); // "95" ("9""5")
console.log('10' - '4' - '3' - 2 + '5'); // "15" ("1""5")

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
	// this is equal Boolean(0)
	console.log("Dont't spend it all");
} else {
	console.log('You should get a job');
}

let height;
if (height) {
	// this is equal Boolean(undefined)
	console.log('YAY! Height is defined');
} else {
	console.log('Height is UNDEFINED');
}

age = 15;
const drink = age >= 18 ? 'wine' : 'water';

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
