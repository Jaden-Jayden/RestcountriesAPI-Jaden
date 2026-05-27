async function getUser() {
	const response = await fetch("https://restcountries.com/v3.1/name/peru");
	const data = await response.json();
	console.log(data);
}

getUser()