// <div class="search-results">
//         <div class="page-description">
//             <p>Your search returned no matches.</p>
//                 </div>
//     <p>Search on <a href="http://www.google.com/query">Google</a></p></div>

	
	var result = document.getElementsByClassName('search-results')[0];
	
	
	if (result == undefined) {
		// Probably was not a search page
		// You might want to check the white list
		exit;
	} else {
		// Should check for content if results were found

		// *://stackoverflow.com/search?q=*
		if (result.children[0].children[0].innerText == "Your search returned no matches.") {
			textOfSearchQuery = document.getElementsByName('q')[0].value;
			
			var newElement = document.createElement("p");
			newElement.innerHTML = "Search with <a href='https://www.google.com/search?q=site: " + window.location.hostname + " " + textOfSearchQuery + "'>Google</a>.";
			
			result.children[0].appendChild(newElement);
		}
	}