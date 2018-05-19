const element = document.querySelector('body');
let hammertime = new Hammer(element);

hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL });

hammertime.on("swipeleft swiperight", function(ev) {
	console.log(ev.type +" gesture detected.");
	console.log(history);
	if (ev.type === 'swipeleft') {
		showRandomPikachuImage();
	} else if (ev.type === 'swiperight') {
		document.getElementById("img").setAttribute("src", history[history.length-1]);
		history.pop();
	}
});