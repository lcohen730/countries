import CountryListItem from '../CountryListItem/CountryListItem';

export default function CountryList({ 
    countryListItems, 
    /* setCountryListItems,  */
    handleSelectCountry
    /* handleSearchCountry, 
    handleFilterCountry  */
}) {
    const countries = countryListItems.map(country =>
        <CountryListItem 
            key={country.cca2} 
            countryListItem={country} 
            handleSelectCountry={handleSelectCountry} 
        />
    )

    return (
        <div>
            {countries}
        </div>
    );
}