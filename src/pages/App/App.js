import React, { useState } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import DetailPage from '../DetailPage/DetailPage';
import HomePage from '../HomePage/HomePage';
import Header from '../../components/Header/Header';

export default function App() {
    const [darkMode, setDarkMode] = useState(false);
    const navigate = useNavigate();

    function handleModeSwitch() {
        setDarkMode(!darkMode);
    }

    async function handleSelectCountry(countryCode) {
        navigate(`/detail/${countryCode}`);
    }

    function handleSearchCountry(searchTerm) {
        navigate(`/search/${searchTerm}`);
    }

    function handleFilterCountry(region) {
        navigate(`/filter/${region}`);
    }

    return (
        <main>
            <Header handleModeSwitch={handleModeSwitch} />
            <Routes>
                <Route path="/" 
                    element={<HomePage 
                        handleSelectCountry={handleSelectCountry} 
                        handleSearchCountry={handleSearchCountry} 
                        handleFilterCountry={handleFilterCountry} 
                    />} 
                />
                <Route path="/search/:searchTerm" 
                    element={<HomePage 
                        handleSelectCountry={handleSelectCountry} 
                        handleSearchCountry={handleSearchCountry} 
                        handleFilterCountry={handleFilterCountry} 
                    />} 
                />
                <Route path="/detail/:countryCode" element={<DetailPage 
                        handleSelectCountry={handleSelectCountry}
                    />} 
                />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </main>
    );
}