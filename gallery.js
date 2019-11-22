// Link CSS
var head = document.getElementsByTagName('HEAD')[0]; // get HTML head element 
var link = document.createElement('link'); // greate new link element 
link.rel = 'stylesheet';  // set the attributes for link element
link.type = 'text/css';
link.href = 'gallery.css';
head.appendChild(link);  // append link element to HTML head 

function justifyGallery(gallery, maximgs = 2) {
	console.log("justifyGallery is running");
	var clientRow = gallery.clientWidth;
	var galleryList = gallery.children;
	var imgs = galleryList.length; // number of images in gallery
	var rows = Math.ceil(imgs / maximgs) // number of rows
	var imgC = 0; // img counter
	for (let rowC = 0; rowC < rows; rowC++) { // row counter

		var maxH = 0;
		for (let j = 0; j < maximgs; j++) {
			maxH = Math.max(maxH, galleryList[imgC].height);
			imgC++;
			if (imgC >= imgs) { break; }
		}
		imgC -= maximgs; // reset imgC to count through row again

		var totW = 0;
		for (let j = 0; j < maximgs; j++) {
			galleryList[imgC].height = maxH;
			totW += galleryList[imgC].offsetWidth;
			imgC++;
			if (imgC >= imgs) { break; }
		}
		imgC -= maximgs; // reset imgC to count through row again

		var Wrate = clientRow / totW;
		Wrate -= 0.05; // temporary fix to rounding errors
		for (let j = 0; j < maximgs; j++) {
			console.log(galleryList[imgC].offsetWidth - galleryList[imgC].clientWidth); // idk why they're the same <shrug emoji>

			galleryList[imgC].width = Math.floor(galleryList[imgC].width * Wrate);
			galleryList[imgC].height = Math.floor(galleryList[imgC].height * Wrate);
			imgC++;
			if (imgC >= imgs) { break; }
		}
	}
	return galleryList;
}

function replaceChildren(parent, newchildren) {
	for (var i = 0; i < parent.children.length; i++) {
		parent.replaceChild(newchildren[i], parent.children[i]);
	}
	return parent
}