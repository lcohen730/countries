import sendRequest from "./send-request";

const BASE_URL = 'https://restcountries.com/v3.1';

export function getAllCountries() {
    return sendRequest(`${BASE_URL}/all`);
}

export function getCountryByRegion(region) {
    return sendRequest(`${BASE_URL}/region/${region}`);
}