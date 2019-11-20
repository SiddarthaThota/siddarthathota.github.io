function justifyGallery(gallery,maximgs = 2) {
	console.log("justifyGallery is running");
	var galleryList = gallery.children;
	imgidx = 0;
	for (let i = 0; i < Math.ceil(galleryList.length/maximgs); i++) {
		docW = document.body.clientWidth; // width of client's page in pixels
		initTotalW = 0;
		for (let j = imgidx; j < imgidx+maximgs; j++){ // j also functions as imgidx
			initTotalW += galleryList[j].clientWidth;
			initTotalW += 10; // margin
		}
		resizeRate = docW/initTotalW;
		for (let j = imgidx; j < imgidx+maximgs; j++){ // j also functions as imgidx
			galleryList[j].style.maxWidth = resizeRate;
			console.log(galleryList[j].style.naturalWidth);
			// galleryList[j].clientWidth *= resizeRate;
		}
		imgidx += 3;
	}
	return galleryList;
}

var galleryElements = document.body.getElementsByClassName("gallery");
for (var i = 0; i < galleryElements.length; i++){
	var newgallery = justifyGallery(galleryElements[i],3);
	// console.log(newgallery[0].clientWidth);

	while (galleryElements[i].firstChild) { // remove all child elements
		document.body.getElementsByClassName("gallery")[i].removeChild(galleryElements[i].firstChild);
	}

	for (var j = 0; j < newgallery.length; j++) { // add new child elements
		document.body.getElementsByClassName("gallery")[i].appendChild(newgallery[j]);
	}
	// console.log(document.body.getElementsByClassName("gallery")[0]);

}
