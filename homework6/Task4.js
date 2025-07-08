function debounce(func, delay) {
	let timeoutId;
	return function (...args) {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			func.apply(this, args)}, delay);
	};
}
//the HTML testTask4 is used to test this function, just open it in a browser 
// adn see the consol log of the browser, it should start searching just after you stop writing

//given to me -----------------------------------
function debouncedSearch(query) {
	console.log("Searching for:", query);
}

const debouncedSearchHandler = debounce(debouncedSearch, 300);
const inputElement = document.getElementById("search-input");
inputElement.addEventListener("input", event => {
	debouncedSearchHandler(event.target.value);
});