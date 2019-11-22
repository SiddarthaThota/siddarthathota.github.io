var sidsDropdownlist =
	[//new Tab("Project0","project0.html","dropdowntext",null),
		//new Tab("Project1","project1.html","dropdowntext",null),
		new Tab("Menu", "portfolio.html", "dropdowntext menu", null),];

function createDroptab(Tab) {
	var siddiv = document.createElement('div');
	siddiv.className = "dropdown";
	siddiv.appendChild(Tab.createA());
	return siddiv;
}

function createDropdown(dropdownlist) {
	var container = document.createElement("div");
	container.id = "dropdownCTN";
	for (var i = 0; i < (dropdownlist.length); i++) {
		container.appendChild(createDroptab(dropdownlist[i]));
	}
	return container;
}


var dropdown = createDropdown(sidsDropdownlist);


document.body.appendChild(dropdown);
//document.body.appendChild(sidsDropdownlist); // append dropdown to body