var response;
var xhr = new XMLHttpRequest();
// retrieve 500 pikachu url images from Giphy 
xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=pHeytEtBN04WZZzVbodZiBtWuRodg9tM&q=pikachu&limit=500&offset=0&rating=G&lang=en', true);

xhr.onload = function () {
  if (xhr.readyState === xhr.DONE) {
    if (xhr.status === 200) {
    	response = JSON.parse(xhr.response);
      	pikachuTimer(response);
    }
  }
};

xhr.send(null);


function returnPikachuImg (response) {
	let pikachuCounter = randomNumber(0, 500); // to get a random number each time the button is pressed
	const image = response.data[pikachuCounter].images.fixed_height.url;
	document.getElementById("img").setAttribute("src", image);
}

function pikachuTimer(response) {
	setInterval(function(){ returnPikachuImg(response); }, 5000);
}


function randomNumber (min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}