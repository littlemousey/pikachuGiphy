const element = document.querySelector('body');
let hammertime = new Hammer(element);

hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL });

hammertime.on("swipeleft swiperight", function(ev) {
	console.log(ev.type +" gesture detected.");
	console.log(history);
	if (ev.type === 'swipeleft') {
		if (timer !== undefined) {
			timer = startPikachuTimer();
		} else {
			showRandomPikachuImage();
		}
	} else if (ev.type === 'swiperight') {
		timer = clearInterval(timer);
		document.getElementById("img").setAttribute("src", history[history.length-1]);
		history.pop();
	}
});