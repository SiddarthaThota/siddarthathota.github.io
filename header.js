var tabs =	[["Home","index.html"],
			 ["Resume","resume.html"],
			 ["Portfolio","portfolio.html"]];

document.getElementById("header").innerHTML = "<a class='title' id='selectedtab' href='index.html'>SIDDARTHA THOTA</a>";
document.getElementById("header").innerHTML += "<div id='container2'>";

document.getElementById("header").innerHTML += "<a class='tab1' href='"+tabs[0][1]+"'>"+tabs[0][0]+"</a>";

for (var i = 1; i < (tabs.length); i++) {
	document.getElementById("header").innerHTML += "<a class='tabs' href='"+tabs[i][1]+"'>"+tabs[i][0]+"</a>";
}

document.getElementById("header").innerHTML += "</div>";