const create = document.getElementById("create");
const form = document.querySelector("form");
const input = document.getElementById("search");
const btn = document.querySelector("button");

form.addEventListener("submit", (e) => {
	e.preventDefault();
});

async function getUser() {
	const search = input.value;

	const response = await fetch(
		"https://restcountries.com/v3.1/all?fields=name,capital,flags,populati",
	);
	const data = await response.json();

    

	console.log(data);
	
}

getUser();
