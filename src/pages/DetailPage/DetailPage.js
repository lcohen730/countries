import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
/* import BackButton from '../../components/BackButton/BackButton';
import Flag from '../../components/Flag/Flag';
import CountryDetailInfo from '../../components/CountryDetailInfo/CountryDetailInfo';
import BorderCountryOptions from '../../components/BorderCountryOptions/BorderCountryOptions'; */
import * as countriesAPI from '../../utilities/countries-api';

export default function DetailPage({ handleSelectCountry }) {    
    const [country, setCountry] = useState({});
    const params = useParams();
    
    useEffect(function() {
        async function getCountry() {
            const country = await countriesAPI.getCountryByCode(params.countryCode);
            setCountry(country);
        }
        getCountry();
    }, [params.countryCode]);
    
    return (
        <div>
            <h1 onClick={handleClick}>Test Detail Page</h1>
            {/* <BackButton />
            <Flag />
            <CountryDetailInfo />
            <BorderCountryOptions /> */}
        </div>
    );
}