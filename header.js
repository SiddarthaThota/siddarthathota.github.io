// This script generates the header for the website.
// It should be placed as the first child of the body in your html.

// Define links under Portfolio
var projects = ["project0.html"]


class Tab {
	constructor(name, link, className, id) {
		this.name = name;
		this.link = link;
		this.className = className;
		this.id = id;
	}

	createA() { // create a link element displaying content based on the provided Tab
		var tablink = document.createElement('a');
		tablink.innerHTML = this.name;
		tablink.href = this.link;

		var sPage = window.location.pathname; // returns the user's current page
		var sPath = sPage.substring(sPage.lastIndexOf('/') + 1, sPage.length); // returns the individual filepath
		tablink.className = this.className;
		if (this.name = "Portfolio") {
			if (sPath in projects) { tablink.id = "selectedtab"; }
		}
		if (this.name = "Home") {
			if (sPath in projects) { tablink.id = "selectedtab"; }
		}
		if (this.name = "Resume") {
			if (sPath in projects) { tablink.id = "selectedtab"; }
		}
		if (this.link == sPath) { tablink.id = "selectedtab"; } // gives the link the id #selectedtab if the user is on the same page as the link's address 
		else { tablink.id = this.id; }

		return tablink;
	}
}

// Define header content with this variable!
var sidsTablist = [	new Tab("Home", "index.html", "tab", null),
					new Tab("Portfolio", "portfolio.html", "tab portfolio", null),
					new Tab("Resume", "resume.html", "tab", null),];

function appendTabs(tablist) { // return div containing elements generated from tablist that function as tabs
	var container = document.createElement('div'); // create div "container"
	container.id = "tabCTN";
	for (var i = 0; i < (tablist.length); i++) {
		var siddiv = document.createElement('div');
		siddiv.className = "tabdiv";
		link = tablist[i].createA();
		siddiv.appendChild(link);
		container.appendChild(siddiv);
	}
	return container;
}

var header = document.createElement('div'); // create header
header.id = "header";

var title = new Tab("Siddartha Thota", "index.html", "title", null);
header.appendChild(title.createA());

header.appendChild(appendTabs(sidsTablist)); // create and append tab container

document.body.appendChild(header); // append header to body
