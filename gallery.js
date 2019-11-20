function justifyGallery(gallery,maximgs = 2) {
	console.log("justifyGallery is running");
	var galleryList = gallery.children;
	imgidx = 0;
	for (let i = 0; i < Math.ceil(galleryList.length/maximgs); i++) {
		docW = document.body.clientWidth; // width of client's page in pixels
		initTotalW = 0;
		for (let j = imgidx; j < Math.min(imgidx+maximgs,galleryList.length); j++){ // j also functions as imgidx
			initTotalW += galleryList[j].clientWidth;
			initTotalW += 10; // margin	
		}
		resizeRate = docW/initTotalW;
		console.log(resizeRate);
		for (let j = imgidx; j < Math.min(imgidx+maximgs,galleryList.length); j++){ // j also functions as imgidx
			console.log("initw: " + galleryList[j].clientWidth + " rate: " + resizeRate);
	
			console.log(galleryList[j].clientWidth * resizeRate);
			galleryList[j].clientWidth = galleryList[j].clientWidth * resizeRate;
			console.log("finalw: " + galleryList[j].clientWidth);
		}
		imgidx += maximgs;
	}
	return galleryList
}

function replaceChildren(parent,newchildren){
	for (var i = 0; i < newchildren.length; i++) { // add new child elements
		parent.appendChild(newchildren[i]);
	}
	for (var i = newchildren.length; i < parent.children.length; i++) { // remove old child elements
		// parent.removeChild(newchildren[i]);
	}
	return parent
}

window.onload = function() { // wait for page to load
	var galleryElements = document.body.getElementsByClassName("gallery");
	for (var i = 0; i < galleryElements.length; i++) {
		var currgallery = document.body.getElementsByClassName("gallery")[i];
		var newchildren = justifyGallery(galleryElements[i],3);
		document.body.getElementsByClassName("gallery")[i] = replaceChildren(currgallery,newchildren);
}

}