const element = document.querySelector('body');
let hammertime = new Hammer(element);

hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL });

hammertime.on("swipeleft swiperight", function(ev) {
	if (ev.type === 'swipeleft') {
		showRandomPikachuImage();

	} else if (ev.type === 'swiperight') {
		if (history.length > 0) {
			timer = clearInterval(timer);
			console.log(history);
			document.getElementById("img").setAttribute("src", history[history.length-1]);
			console.log(history);
			history.pop();
			timer = startPikachuTimer();
		}
	}
});

function previous () {
	if (history.length > 0) {
		timer = clearInterval(timer);
		console.log(history);
		document.getElementById("img").setAttribute("src", history[history.length-1]);
		console.log(history);
		history.pop();
		timer = startPikachuTimer();
	}	
}

function next () {
	showRandomPikachuImage();
}