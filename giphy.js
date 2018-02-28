var response;
var xhr = new XMLHttpRequest();
// retrieve 200 pikachu url images from Giphy 
xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=pHeytEtBN04WZZzVbodZiBtWuRodg9tM&q=happy pikachu&limit=200&offset=0&rating=G&lang=en', true);

xhr.onload = function () {
  if (xhr.readyState === xhr.DONE) {
    if (xhr.status === 200) {
    	response = JSON.parse(xhr.response);
      	returnPikachuImg(response);
    }
  }
};

xhr.send(null);


function returnPikachuImg (response) {
	let pikachuCounter = randomNumber(0, 200); // to get a random number each time the button is pressed
	const image = response.data[pikachuCounter].images.fixed_height.url;
	document.getElementById("img").setAttribute("src", image);
}

function randomNumber (min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}