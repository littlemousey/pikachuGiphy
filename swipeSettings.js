const element = document.querySelector("body");
let hammertime = new Hammer(element);

hammertime.get("pan").set({ direction: Hammer.DIRECTION_ALL });

hammertime.on("swipeleft swiperight", function(ev) {
  if (ev.type === "swipeleft") {
    showRandomPikachuImage();
  } else if (ev.type === "swiperight") {
    if (history.length > 0) {
      timer = clearInterval(timer);
      document
        .getElementById("img")
        .setAttribute("src", history[history.length - 1]);
      history.pop();
      timer = startPikachuTimer();
    }
  }
});
