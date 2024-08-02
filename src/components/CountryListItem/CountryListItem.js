import styles from './CountryListItem.module.scss';

export default function CountryListItem({ countryListItem }) {
    const formattedPop = countryListItem.population.toLocaleString('en-US');
    const capitals = Array.isArray(countryListItem.capital) ?
        countryListItem.capital.join(', ') :
        countryListItem.capital;

    return (
        <div className={styles.country}>
            <img src={countryListItem.flags.svg} alt={countryListItem.name.common} />
            <div className={styles.text}>
                <p>{countryListItem.name.common}</p>
                <ul>
                    <li>Population: {formattedPop}</li>
                    <li>Region: {countryListItem.region}</li>
                    <li>Capital: {capitals}</li>
                </ul>
            </div>
        </div>
    );
}