import styles from "./CountryList.module.scss";
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
        <div className={styles.countries}>
            {countries}
        </div>
    );
}