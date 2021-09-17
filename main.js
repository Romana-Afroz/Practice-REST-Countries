const loadCountries= () => {
    fetch ('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data) );
}

const displayCountries= countries =>{
    console.log(countries[0]);
    const container=document.getElementById('countries');
    const countryHtml=countries.map(country => getCountryHtml(country));
    container.innerHTML=countryHtml.join('');
    console.log(countryHtml[0]);

}
const getCountryHtml=country => {
    return `
    <div class="country">
    <h2>${country.name}</h2>
    <h4>Capital:${country.capital}</h4>
    <h4>Time:${country.timezones}</h4>
    <h4>NativeName:${country.nativeName}</h4>
    <h4>Region:${country.region}</h4>
    <img src="${country.flag}">
    </div>
    `
}
loadCountries();