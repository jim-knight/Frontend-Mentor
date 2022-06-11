'use strict';

const ratingSelection = document.querySelector('ul#ratingSelection');
const ratingValues = document.querySelectorAll('.ratingValue');
const ratingSubmitButton = document.querySelector('#ratingSubmitButton');
const errorMessage = document.querySelector('.errorMessage');
const ratingOutput = document.querySelector('#ratingOutput');
let userRating = 0;

const ratingSelector = function () {};
ratingSelection.addEventListener('click', function (e) {
	const clicked = e.target.closest('.ratingValue');
	// Guard clause
	if (!clicked) return;
	userRating = clicked.dataset.ratingSelect;
	console.log(`Current rating: ${userRating}`);

	// Remove active class from any selector that has it.
	ratingValues.forEach((s) => s.classList.remove('active'));
	// Add active class back to the one we just clicked
	clicked.classList.add('active');

	ratingOutput.innerHTML = `You selected ${userRating} out of 5`;
});
const ratingSubmit = function () {
	ratingSubmitButton.addEventListener('click', function (e) {
		console.log(`clicked`);
		if (!userRating) {
			console.log(`No rating selected!`);
			errorMessage.classList.add('active');
			setTimeout(function () {
				errorMessage.classList.remove('active');
			}, 2500);
			return;
		}
		document.getElementById('ratingSelectForm').classList.remove('active');
		document.getElementById('thankYouMessage').classList.add('active');
	});
};

const ratingSystem = function () {
	ratingSelector();
	ratingSubmit();
};
ratingSystem();
