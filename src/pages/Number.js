import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/Number.css';
import Player from "../components/Player";
import SongPicker from "../components/SongPicker";

const Number = () => {
    const { number } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const guessedNumbers = localStorage.getItem('guessedNumbers');
        if (!guessedNumbers) {
            localStorage.setItem('guessedNumbers', JSON.stringify([]));
            return;
        }

        const parsed = JSON.parse(guessedNumbers);
        if (parsed.includes(number)) {
            return navigate('/already-guessed');
        }
    }, []);

    return (
        <div className="container">
            <h1>U bevind zich bij huisnummer: {number}</h1>

            <Player number={number}/>

            <SongPicker number={number}/>
        </div>
    );
};

export default Number;