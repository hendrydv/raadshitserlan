import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Number.css';
import Player from "../components/Player";
import SongPicker from "../components/SongPicker";

const Number = () => {
    const { number } = useParams();

    const handleYearChange = (year) => {
        console.log('Selected year:', year);
    };

    return (
        <div className="container">
            <h1>U bevind zich bij huisnummer: {number}</h1>

            <Player number={number}/>

            <SongPicker number={number}/>
        </div>
    );
};

export default Number;