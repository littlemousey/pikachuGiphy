let giphies;
let timer;

loadGiphies({
	apiKey: 'pHeytEtBN04WZZzVbodZiBtWuRodg9tM',
	subject: 'pikachu'
});

function loadGiphies(info) {
	const xhr = new XMLHttpRequest();

	// retrieve 500 pikachu url images from Giphy 
	xhr.open('GET', `https://api.giphy.com/v1/gifs/search?api_key=${info.apiKey}&q=${info.subject}&limit=500&offset=0&rating=G&lang=en`);

	xhr.onload = function () {
	  if (xhr.readyState === xhr.DONE) {
	    if (xhr.status === 200) {
	    	const response = JSON.parse(xhr.response);

	    	giphies = extractGiphyUrls(response);
	      	initializeButtons();

	    	showRandomPikachuImage();
	      	timer = startPikachuTimer();
	    }
	  }
	};

	xhr.send(null);
}

function extractGiphyUrls(response) {
	return response.data.map(function(item) { return item.images.fixed_height.url; });
}

function initializeButtons () {
	const nextButton = document.getElementById("next_btn");
	const playButton = document.getElementById("play_btn");
	nextButton.innerText = 'Next pikachu';

	nextButton.addEventListener('click', function() {
		showRandomPikachuImage();
	});
	playButton.addEventListener('click', function() {
		iconAction();
	});
}

function showRandomPikachuImage () {
	let pikachuCounter = randomNumber(0, 500); // to get a random number each time the button is pressed
	const image = giphies[pikachuCounter];
	document.getElementById("img").setAttribute("src", image);
}

function startPikachuTimer () {
	return setInterval(function() { showRandomPikachuImage(); }, 5000);
}

function iconAction () {
	// to change the play or stop icon and trigger action
	const icon = document.getElementById("icon");
	if (playModeOn()) {
		timer = clearInterval(timer);
		icon.setAttribute('class', 'fa fa-play');

	} else {
		timer = startPikachuTimer();
		icon.setAttribute('class', 'fa fa-stop');
	}
}

function playModeOn () {
	return timer !== undefined;
}

function randomNumber (min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}
