import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../../components/BackButton/BackButton';
import Flag from '../../components/Flag/Flag';
/* import CountryDetailInfo from '../../components/CountryDetailInfo/CountryDetailInfo';
import BorderCountryOptions from '../../components/BorderCountryOptions/BorderCountryOptions'; */
import * as countriesAPI from '../../utilities/countries-api';

export default function DetailPage({ handleSelectCountry }) {
    const [country, setCountry] = useState({});
    const params = useParams();

    useEffect(function () {
        async function getCountry() {
            const data = await countriesAPI.getCountryByCode(params.countryCode);
            setCountry(data[0]);
        }
        getCountry();
    }, [params.countryCode]);

    return (
        <div>
            <BackButton />
            <Flag country={country}/>
            {/* <CountryDetailInfo />
            <BorderCountryOptions /> */}
        </div>
    );
}