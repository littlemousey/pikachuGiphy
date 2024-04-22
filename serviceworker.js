const addResourcesToCache = async (resources) => {
  const cache = await caches.open("pikachu-giphy-v1");
  await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
  event.waitUntil(
    addResourcesToCache([
      "/",
      "/index.html",
      "https://api.giphy.com/",
      "https://media0.giphy.com/",
      "https://media1.giphy.com/",
      "https://media2.giphy.com/"
    ]),
  );
});
