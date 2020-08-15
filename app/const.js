'use strict';

const { blue, green, yellow, red } = require(`chalk`);

const welcomeText = `${blue.bold(`ИГРА В КОСТИ`)}
Сначала бросаете Вы, потом Система. Выиграет тот, у кого больше.`;
const countText = `Бросаем?
Введите чисто кубиков от ${yellow(1)} до ${yellow(3)} или ${yellow(0)} для выхода
> `;

module.exports = {
	byeText: `До новых встреч!`,
	countText,
	equalText: blue(`Ничья!`),
	failText: red(`Вы проиграли!`),
	welcomeText,
	winText: green(`Вы выиграли!`)
};
