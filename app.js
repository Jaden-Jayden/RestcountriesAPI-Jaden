const $form = document.querySelector("#country-form");
const $selectFilterRegion = document.querySelector("#filter-region");
const $main = document.querySelector("main");
const $input = document.getElementById("search");

let $countrySection = document.querySelector("#countriessec");

const API_URL = "https://restcountries.com/v3.1";

function createCountryCard({
	name,
	population,
	region,
	capital,
	flag,
	flagAlt,
}) {
	const $div = document.createElement("div");
	const $divP = document.createElement("div");
	const $img = document.createElement("img");
	const $h5 = document.createElement("h5");
	const $pPopulation = document.createElement("p");
	const $pRegion = document.createElement("p");
	const $pCapital = document.createElement("p");

	$img.src = flag;
	$img.alt = flagAlt;
	$h5.textContent = name;
	$pPopulation.textContent = `Population: ${population}`;
	$pRegion.textContent = `Region: ${region}`;
	$pCapital.textContent = `Capital: ${capital}`;

	$div.classList.add("country-card");
	$h5.classList.add("card-title");
	$divP.classList.add("card-text");
	$divP.append($h5, $pPopulation, $pRegion, $pCapital);
	$div.append($img, $divP);

	$div.addEventListener("click", () => {
		window.location = `country.html?country=${name}`;
	});

	return $div;
}

function clearCountries() {
	$countrySection.remove();
	$countrySection = document.createElement("section");
	$countrySection.classList.add("countries-container");

	$main.appendChild($countrySection);
}

function displayCountries(countries) {
	for (let i = 0; i < countries.length; i++) {
		const { name, capital, population, flags, region } = countries[i];

		if (capital !== undefined) {
			capital[0];
		}

		capital !== undefined ? capital[0] : undefined;

		const $divCard = createCountryCard({
			name: name.common,
			capital: capital?.[0],
			population,
			flag: flags.png,
			flagAlt: flags.alt,
			region,
		});

		$countrySection.appendChild($divCard);
	}
}

document.addEventListener("DOMContentLoaded", async () => {
	const response = await fetch(
		`${API_URL}/all?fields=name,flags,population,capital,region`,
	);
	const data = await response.json();

	console.log(data);

	clearCountries();
	displayCountries(data);
	console.log;
});

$form.addEventListener("submit", async (e) => {
	e.preventDefault();

	const formData = new FormData($form);
	const countryName = formData.get("country");

	console.log("DEBUUUUUUUUG", countryName);

	const response = await fetch(`${API_URL}/name/${countryName}`);
	const data = await response.json();

	clearCountries();
	displayCountries(data);
});

$selectFilterRegion.addEventListener("change", async () => {
	const filterRegion = $selectFilterRegion.value;

	const response = await fetch(`${API_URL}/region/${filterRegion}`);
	const data = await response.json();

	clearCountries();
	displayCountries(data);
});

$input.addEventListener("change", async () => {
	const inputvalue = $input.value;

	const response = await fetch(
		`https://restcountries.com/v3.1/name/${inputvalue}?fields=name,population,region`,
	);
	const data = await response.json();

	clearCountries();
	displayCountries(data);
});

/*
document.querySelector("search").addEventListener("keypress", function (e) {
	if (e.key === "Enter") {
		location.replace("country.html");
	}
});
*/
