//coding challenge #1
//Part 1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);

const checkWinner = (avgDolphins, avgKoalas) => {
	if (avgDolphins >= avgKoalas * 2) {
		console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
	} else if (avgKoalas >= avgDolphins * 2) {
		console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
	} else {
		console.log('No team wins...');
	}
};
checkWinner(avgDolphins, avgKoalas);

checkWinner(576, 111);

//Part 2
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);

checkWinner(avgDolphins, avgKoalas);

//code challenge #2
// const calcTip = bill =>
// 	bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const calcTip = function (bill) {
	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bill = 100;
console.log(calcTip(bill));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);

//Challege #3
const mark = {
	fullName: 'Mark Miller',
	mass: 78,
	height: 1.69,
	calcBMI: function () {
		this.bmi = this.mass / this.height ** 2;
		return this.bmi;
	},
};

console.log(mark.calcBMI());

const john = {
	fullName: 'John Smith',
	mass: 92,
	height: 1.95,
	calcBMI: function () {
		this.bmi = this.mass / this.height ** 2;
		return this.bmi;
	},
};

console.log(john.calcBMI());

if (mark.bmi > john.bmi) {
	console.log(
		`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!"`
	);
} else if (john.bmi > mark.bmi) {
	console.log(
		`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!"`
	);
}

//challenge #4
const billss = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tipss = [];
const totals = [];

const calcTipss = function (billss) {
	return billss >= 50 && billss <= 300 ? billss * 0.15 : billss * 0.2;
};

for (let i = 0; i < billss.length; i++) {
	tipss.push(calcTipss(billss[i]));
	totals.push(billss[i] + tipss[i]);
}
console.log(tipss, totals);

//Bonus
const avgs = [10, 20, 30];
let sum = 0;
function calcAverages(avgs) {
	for (let a = 0; a < avgs.length; a++) {
		sum += avgs[a]; // sum = sum + billss[a]
		console.log(sum);
	}
	return sum / avgs.length;
}
console.log(calcAverages(billss));
console.log(calcAverages(avgs));
