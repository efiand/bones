'use strict';

const readline = require(`readline`);
const { yellow } = require(`chalk`);
const { byeText, countText, failText, equalText, welcomeText, winText } = require(`./app/const`);
const { getRandomInt } = require(`./app/utils`);

const game = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let numOfCubes = 1;

const sayBye = () => {
	console.log(byeText);
	process.exit(1);
};

const play = () => {
	game.question(countText, (answer) => {
		console.clear();
		numOfCubes = parseInt(answer);
		if (numOfCubes === 0) {
			sayBye();
		} else if (numOfCubes > 0 && numOfCubes <= 3) {
			const max = numOfCubes * 6;
			const userRes = getRandomInt(numOfCubes, max);
			console.clear();
			console.log(`Ваш результат - ${yellow(userRes)} из ${max}`);

			const sysRes = getRandomInt(numOfCubes, max);
			console.log(`Результат Системы - ${yellow(sysRes)} из ${max}`);

			if (userRes > sysRes) {
				console.log(winText);
			} else if (userRes === sysRes) {
				console.log(equalText);
			} else {
				console.log(failText);
			}
		}
		play();
	});
};

console.clear();
console.log(welcomeText);
play();
