// This script generates the header for the website.

function appendTabs(tablist, tab0id, tabclass) { // return div containing elements generated from tablist that function as tabs
	var container = document.createElement('div'); // create div "container"
	
	var tab0 = document.createElement('a'); // create first tab tab0
	tab0.setAttribute = ('id',tab0id); // add id "tab0id" to tab0
	tab0.href = tablist[0][1]; // add link to tab0
	tab0.innerHTML = tablist[0][0]; // tab0 content
	container.appendChild(tab0); // append tab0 to container

	// create remaining tabs from tablist
		for (var i = 1; i < (tabs.length); i++) {
			var tab = document.createElement('a');
			tab.setAttribute = ('class',tabclass); // add class "tabclass" to tab
			tab.href = tablist[i][1];
			tab.innerHTML = tabs[i][0];
			// append tab to container
			container.appendChild(tab);
		}
	return container;
}

var header = document.createElement('div'); // create header
header.setAttribute = ('id','header');

	var nametab = document.createElement('a'); // create title to display in header
	nametab.setAttribute = ('class',"title");
	nametab.setAttribute = ('id',"selectedtab");
	nametab.innerHTML = "SIDDARTHA THOTA"; // title content
	nametab.href = "index.html"; // link to homepage when title is clicked

	var tabCTN = document.createElement('div'); // create tab container
	tabCTN.setAttribute = ('id',"tabCTN");

	var tabs =	[["Home",		"index.html"],
				 ["Resume",		"resume.html"],
				 ["Portfolio",	"portfolio.html"]]; // array of tabs to display in header

	tabCTN.appendChild(appendTabs(tabs, "tab0", "tab")); // generate tab elements from array tabs and add to tabCTN

	//append content to header
	header.appendChild(nametab);
	header.appendChild(tabCTN);

document.body.appendChild(header); // append header to body
