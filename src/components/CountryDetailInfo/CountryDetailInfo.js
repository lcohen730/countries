export default function CountryDetailInfo({ country }) {
    const nativeNames = function () {
        let names = [];
        if (country && country.name) {
            for (let key in country.name.nativeName) {
                if (country.name.nativeName.hasOwnProperty(key)) {
                    names.push(country.name.nativeName[key].common);
                }
            }
        }
        return names.join(', ');
    };
    const formattedPop = function() {
        if (country && country.population) {
            return country.population.toLocaleString('en-US');
        }
        return '';
    };
    const capitals = function() {
        if (country && country.capital) {
            return Array.isArray(country.capital) ?
                country.capital.join(', ') :
                country.capital;
        }
        return '';
    };
    const topLevelDomains = function() {
        if (country && country.tld) {
            return country.tld.join(', ');
        }
    };
    const currencies = function () {
        let currenciesArr = [];
        if (country && country.currencies) {
            for (let key in country.currencies) {
                if (country.currencies.hasOwnProperty(key)) {
                    currenciesArr.push(country.currencies[key].name);
                }
            }
        }
        return currenciesArr.join(', ');
    };
    const languages = function () {
        let languagesArr = [];
        if (country && country.languages) {
            for (let key in country.languages) {
                if (country.languages.hasOwnProperty(key)) {
                    languagesArr.push(country.languages[key]);
                }
            }
        }
        return languagesArr.join(', ');
    };

    return (
        <div>
            {country && country.name ?
                (
                    <div>
                        <h1>{country.name.common}</h1>
                        <p>Native Name(s): {nativeNames()}</p>
                        <p>Population: {formattedPop()}</p>
                        <p>Region: {country.region}</p>
                        <p>Sub Region: {country.subregion}</p>
                        <p>Capital(s): {capitals()}</p>
                        <p>Top Level Domain(s): {topLevelDomains()}</p>
                        <p>Currencies: {currencies()}</p>
                        <p>Language(s): {languages()}</p>
                    </div>
                ) : (<p>Country info loading...</p>)
            }
        </div>
    );
}