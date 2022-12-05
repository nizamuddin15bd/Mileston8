const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}

const displayCountries = countries => {
    console.log(countries[0]);
    const countriesHTML = countries.map(country => getCountryHTML(country));
    // console.log(countriesHTML[0]);
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
}

// oftion 2
const getCountryHTML = ({ name, flags, area, capital, region }) => {
    return `
        <div class = "country">
            <h2>${name.common}</h2>
            <p>Area: ${area}</p>
            <p>Region: ${region}</p>
            <h6>Capital: ${capital}</h6>
            <img src = "${flags.png}">
        </div>
        `;
}


// oftion
// const getCountryHTML = country => {
//     // oftion 1
//     const { name, flags } = country
//     return `
//         <div class = "country">
//             <h2>${name.common}</h2>
//             <img src = "${flags.png}">
//         </div>
//         `;
// }
// original
// const getCountryHTML = country => {
//     return `
//         <div class = "country">
//             <h2>${name.common}</h2>
//             <img src = "${flags.png}">
//         </div>
//         `;
// }
loadCountries();