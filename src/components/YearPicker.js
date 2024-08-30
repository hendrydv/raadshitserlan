// src/YearPicker.js
import React, { useState } from 'react';
import '../styles/YearPicker.css';

const YearPicker = () => {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 100;
    const endYear = currentYear + 10;

    const years = [];
    for (let year = startYear; year <= endYear; year++) {
        years.push(year);
    }

    const [selectedYear, setSelectedYear] = useState(currentYear);

    const handleChoose = () => {
        console.log('Chosen year:', selectedYear);
    }

    return (
        <div className="year-picker">
            <label htmlFor="year">Kies een jaar:</label>
            <select id="year" value={selectedYear}
                    onChange={(e) => setSelectedYear(parseInt(e.target.value))}>
                {years.map(year => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                ))}
            </select>

            <button className="choose" onClick={handleChoose}>
                Kiezen
            </button>
        </div>
    );
};

export default YearPicker;
