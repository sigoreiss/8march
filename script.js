let currentCard = 1;
let currentIn = 1;
const answers = [];
let text = document.getElementById("card8");

document.getElementById("next").addEventListener("click", () => {
	const inputs = document.querySelectorAll(".in");
	let nextIn = (currentIn % inputs.length) + 1;

	let inputValue = document.getElementById("input" + currentIn).value;
	let savedText = inputValue;
	answers.push(savedText);

	currentIn = nextIn;

	const cards = document.querySelectorAll(".card");
	let nextCard = (currentCard % cards.length) + 1;

	document.getElementById("card" + currentCard).classList.remove("active");
	document.getElementById("card" + nextCard).classList.add("active");

	currentCard = nextCard;

	text.textContent = `Дорогая ${answers[0]}! Поздравляю тебя с днем всех женщин. Вот уже ${answers[1]} лет ты
остаешься прекрасной и цветешь как тюльпаны. Цвети и дальше! И пусть
завистники говорят "${answers[2]}", не слушай их. Продолжай воплощать свои мечты в
реальность и уже совсем скоро тебя ждет ${answers[3]}. Не важно: ${answers[4]} или букет из шоколадок,
потому что ты заслуживаешь всех цветов этого мира. Гармонии тебе, уверенности и внутренней силы.
Нервов крепче, чем ${answers[5]} и впечатлений приятнее, чем ${answers[6]}.
Живи эту жизнь так, как хочешь ты! С наилучшими пожеланиями, Олег Сигарэйс ;)`;

	if (currentCard == cards.length) {
		document.getElementById("next").style.visibility = "hidden";
	}
});
