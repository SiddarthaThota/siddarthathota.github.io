// This script generates the header for the website. It should be placed as the first child of the body in your html.

class Tab {
	constructor(name, link, className, id) {
		this.name = name;
		this.link = link;
		this.className = className;
		this.id = id;
	}
	createA() { // generate a element with tab data
		var tablink = document.createElement('a');
		tablink.innerHTML = this.name;
		tablink.href = this.link;
		tablink.className = this.className;
		tablink.id = this.id;
		return tablink;
	}
}

function appendTabs(tablist) { // return div containing elements generated from tablist that function as tabs
	var container = document.createElement('div'); // create div "container"
	
	for (var i = 0; i < (tablist.length); i++) {
			link = tablist[i].createA();
			container.appendChild(link);
		}
	return container;
}

var sidsTablist =	[new Tab("Home","index.html","tab","tab0"),
					 new Tab("Resume","resume.html","tab",null),
					 new Tab("Portfolio","portfolio.html","tab",null),];

var header = document.createElement('div'); // create header
header.id = "header";

	var title = new Tab("Siddartha Thota","index.html","title",null);
	header.appendChild(title.createA());

	var tabCTN = document.createElement('div'); // create tab container
	tabCTN.id = "tabCTN";
		tabCTN.appendChild(appendTabs(sidsTablist));
	header.appendChild(tabCTN);

document.body.appendChild(header); // append header to body
