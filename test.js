async function getUser() {
	const $testthing = "Malta";

	const response = await fetch(
		`https://restcountries.com/v3.1/name/${$testthing}?fields=name,population,region`,
	);
	const data = await response.json();
	console.log(data);
}

getUser();
