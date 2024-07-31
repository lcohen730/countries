export default function CountryListItem({ countryListItem }) {
    const formattedPop = countryListItem.population.toLocaleString('en-US');

    return (
        <div>
            <img src={countryListItem.flags.svg} alt={countryListItem.name.common} width={300} />
            <p>{countryListItem.name.common}</p>
            <ul>
                <li>Population: {formattedPop}</li>
                <li>Region: {countryListItem.region}</li>
                <li>Capital: {countryListItem.capital}</li>
            </ul>
        </div>
    );
}