
  
// We are not using jQuery for DOM manipulation because:
//  - not possible to load and use jQuery in a Safari extension
//  - performance reason: we don't want to load it on each whitelisted website




function new_node_to_insert_on_web_page() {
	var newElement = document.createElement("p");
	newElement.innerHTML = "Search with <a href='https://www.google.com/search?q=site: " + window.location.hostname + " " + text_of_search_query_stackoverflow() + "'>Google</a>.";

	return newElement;
}



/////////////////////

/* stackoverflow.com

 Whitelist: http://stackoverflow.com/search?q=*

 Nodes for no search results:
 <div class="search-results">
         <div class="page-description">
             <p>Your search returned no matches.</p>
                 </div>
*/


function is_a_search_page_with_no_results_stackoverflow() {
	var result = document.getElementsByClassName('search-results')[0];
	
	if (result == undefined) {
		// Probably was not a search page
		// You might want to check the white list
		return false;
	}

	// Should check for content if results were found
	if (result.children[0].children[0].innerText == "Your search returned no matches.") {
		return true;
	}

	return false;
}


function text_of_search_query_stackoverflow() {
	return document.getElementsByName('q')[0].value;
}


function node_where_to_append_new_node_as_a_child_stackoverflow() {
	return document.getElementsByClassName('search-results')[0].children[0];
}

//////////////		
// alert("Google Search If No Local Result extension loaded.");

if (is_a_search_page_with_no_results_stackoverflow()) {
	node_where_to_append_new_node_as_a_child_stackoverflow().appendChild(new_node_to_insert_on_web_page());
}
