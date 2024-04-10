this.addEventListener("install", function() {
  const cache = caches.open("pikachu-giphy-v1");
  cache.addAll([
    "/",
    "https://api.giphy.com/",
    "https://media0.giphy.com/",
    "https://media1.giphy.com/",
    "https://media2.giphy.com/"
  ]);
});
