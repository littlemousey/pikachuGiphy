let giphies;
let timer;
const history = [];

if ("serviceWorker" in navigator) {
	// Register a service worker hosted at the root of the
	// site using the default scope.
	navigator.serviceWorker.register('serviceworker.js').then(
	  (registration) => {
		console.log("Service worker registration succeeded:", registration);
	  },
	  (error) => {
		console.error(`Service worker registration failed: ${error}`);
	  },
	);
  } else {
	console.error("Service workers are not supported.");
  }

loadGiphies({
	apiKey: config.API_KEY_GIPHY,
	subject: 'pikachu'
});

function loadGiphies(info) {
	const xhr = new XMLHttpRequest();

	// retrieve 50 pikachu url images from Giphy (formaly 500 but Giphy doesn't accept it anymore)
	xhr.open('GET', `https://api.giphy.com/v1/gifs/search?api_key=${info.apiKey}&q=${info.subject}&limit=50&offset=0&rating=G&lang=en`);

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
	nextButton.innerText = '>';

	nextButton.addEventListener('click', function() {
		showRandomPikachuImage();
	});
	playButton.addEventListener('click', function() {
		iconAction();
	});
}

function showRandomPikachuImage () {
	let pikachuCounter = randomNumber(0, giphies.length); // to get a random number each time the button is pressed
	const image = giphies[pikachuCounter];
	history.push(image);
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
		icon.setAttribute('class', 'fa fa-pause');
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
