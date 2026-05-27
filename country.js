function createCountryCard({
	name,
	population,
	region,
	capital,
	flag,
	flagAlt,
}) {
	const h1 = document.getElementById("knowname");
	const imgc = document.getElementById("countryimg");
	const nativename = document.getElementsByClassName("native-name");
	const populationc = document.getElementsByClassName("population");
	const regionc = document.getElementsByClassName("region");
	const subregion = document.getElementsByClassName("sub-region");
	const capitalc = document.getElementsByClassName("capital");

	h1.textContent = name;
	imgc.src = flag;
	imgc.alt = flagAlt;
	populationc.textContent = `Population: ${population}`;
	regionc.textContent = `Region: ${region}`;
	capitalc.textContent = `Capital: ${capital}`;
}
