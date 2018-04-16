fetch('https://api.giphy.com/v1/gifs/search?api_key=M2NeUIwiPVvIIJ6VE9JcIBqxGbT7doP5&q=pingu&limit=200&offset=0&rating=G&lang=en')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    const pinguList = shuffleList(savePinguImgs(myJson));
    showPingus(pinguList);
  });

function savePinguImgs (rawData) {
	const pingus = [];

	for (let pingu of rawData.data) {
		pingus.push(pingu.images.original.url);
	}
	return pingus;
}

function showPingus (list) {
	for (let pingu of list ) {
		let newElement = '<img src="`${pingu}`" alt="pingu">';
		var img = document.createElement('img');
		img.src = `${pingu}`;
		img.alt = 'pingu';
		document.getElementById('pingus').appendChild(img);
	}
}

function shuffleList (list) {
    var j, x, i;
    for (i = list.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = list[i];
        list[i] = list[j];
        list[j] = x;
    }
    return list;
}