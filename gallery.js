function justifyGallery(gallery,maximgs = 2) {
	console.log("justifyGallery is running");
	var galleryList = gallery.children;
	imgidx = 0;
	for (let i = 0; i < Math.ceil(galleryList.length/maximgs); i++) {
		docW = document.body.clientWidth; // width of client's page in pixels
		initTotalW = 0;
		for (let j = imgidx; j < Math.min(imgidx+maximgs,galleryList.length); j++){ // j also functions as imgidx
			console.log(galleryList[j]);
			initTotalW += galleryList[j].clientWidth;
			initTotalW += 10; // margin	
		}
		resizeRate = docW/initTotalW;
		for (let j = imgidx; j < Math.min(imgidx+maximgs,galleryList.length); j++){ // j also functions as imgidx
			// console.log(galleryList[j].clientWidth);
			galleryList[j].clientWidth *= resizeRate;
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
		parent.removeChild(newchildren[i]);
	}
	return parent
}

var galleryElements = document.body.getElementsByClassName("gallery");
for (var i = 0; i < galleryElements.length; i++) {
	currgallery = document.body.getElementsByClassName("gallery")[i];
	var newchildren = justifyGallery(galleryElements[i],3);
	currgallery = replaceChildren(currgallery,newchildren);
}