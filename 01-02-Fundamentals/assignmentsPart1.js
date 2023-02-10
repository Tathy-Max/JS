let country = 'Canada';
let continent = 'North America';
let population = '30 millions';

console.log(country, continent, population);

//code challeging #1
let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

let markBmi = markMass / markHeight ** 2;
let johnBmi = johnMass / johnHeight ** 2;

let markHigherBmi = markBmi > johnBmi;

console.log(markBmi, johnBmi, markHigherBmi);

//code challeging #2
if (markHigherBmi) {
	console.log(`Mark's BMI (${markBmi}) is higher than John's! (${johnBmi})`);
} else {
	console.log(`John's BMI (${johnBmi}) is higher than Mark's! (${markBmi})`);
}

//code challeging #3
let dolphinsScoreAverage = (96 + 108 + 89) / 3;
console.log(dolphinsScoreAverage);

let koalasScoreAverage = (88 + 91 + 110) / 3;
console.log(koalasScoreAverage);

if (dolphinsScoreAverage > koalasScoreAverage) {
	console.log('Dolphins won!');
} else {
	console.log('Koalas won!');
}

dolphinsScoreAverage = (97 + 112 + 101) / 3;
koalasScoreAverage = (109 + 95 + 123) / 3;

if (dolphinsScoreAverage >= 100 && dolphinsScoreAverage > koalasScoreAverage) {
	console.log('Dolphins won!');
} else if (
	koalasScoreAverage >= 100 &&
	koalasScoreAverage > dolphinsScoreAverage
) {
	console.log('Koalas won!');
} else {
	console.log('Neither Dolphins or Koalas won :(');
}

//code challeging #4
const bill = 275;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
	`The bill was $${bill}, the tip was $${tip}, and the total value $${
		bill + tip
	}`
);
