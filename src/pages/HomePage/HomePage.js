import styles from './HomePage.module.scss';
import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import FilterDropDown from '../../components/FilterDropDown/FilterDropDown';
/* import FilterOptions from '../../components/FilterOptions/FilterOptions'; */
import CountryList from '../../components/CountryList/CountryList';
import * as countriesAPI from '../../utilities/countries-api';

export default function HomePage({ 
    handleSelectCountry, 
    handleSearchCountry, 
    handleFilterCountry 
}) {
    const [countryListItems, setCountryListItems] = useState([]);

    useEffect(function() {
        async function getCountries() {
            const countries = await countriesAPI.getAllCountries();
            setCountryListItems(countries);
        }
        getCountries();
    }, []);

    return (
        <div>
            <div className={styles.topRow}>
                <SearchBar handleSearchCountry={handleSearchCountry} />
                <FilterDropDown />
                {/* <FilterOptions handleFilterCountry={handleFilterCountry} /> */}
            </div>
            <CountryList 
                countryListItems={countryListItems} 
                setCountryListItems={setCountryListItems} 
                handleSelectCountry={handleSelectCountry} 
                handleSearchCountry={handleSearchCountry} 
                handleFilterCountry={handleFilterCountry} 
            />
        </div>
    );

}