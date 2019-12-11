// Link gallery CSS
var head = document.getElementsByTagName('HEAD')[0]; // get HTML head element 
var link = document.createElement('link'); // greate new link element 
link.rel = 'stylesheet';  // set the attributes for link element
link.type = 'text/css';
link.href = 'gallery.css';
head.appendChild(link);  // append link element to HTML head 

function justifyGallery(gallery, maximgs = 2) {
	var clientRow = gallery.clientWidth;
	var galleryList = gallery.children;
	var chidrenN = galleryList.length; // number of children in gallery
	var rows = Math.ceil(chidrenN / maximgs) // number of rows
	var childC = 0; // child counter
	for (let rowC = 0; rowC < rows; rowC++) { // row counter
		
		var maxH = 0;
		for (let j = 0; j < maximgs; j++) {
			maxH = Math.max(maxH, galleryList[childC].children[0].height);
			childC++;
			if (childC >= chidrenN) { break; }
		}
		childC -= maximgs; // reset childC to count through row again

		var totW = 0;
		for (let j = 0; j < maximgs; j++) {
			galleryList[childC].children[0].height = maxH;
			totW += galleryList[childC].children[0].offsetWidth;
			childC++;
			if (childC >= chidrenN) { break; }
		}
		childC -= maximgs; // reset childC to count through row again

		var Wrate = clientRow / totW;
		Wrate -= 0.05; // temporary fix to rounding errors
		for (let j = 0; j < maximgs; j++) {
			// console.log(galleryList[childC].offsetWidth - galleryList[childC].clientWidth); // idk why they're the same <shrug emoji>

			galleryList[childC].children[0].width = Math.floor(galleryList[childC].children[0].width * Wrate);
			galleryList[childC].children[0].height = Math.floor(galleryList[childC].children[0].height * Wrate);
			childC++;
			if (childC >= chidrenN) { break; }
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