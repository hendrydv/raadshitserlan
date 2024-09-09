import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import numberData from '../data/numbers.json';
import '../styles/Feedback.css';
import ReactGa from 'react-ga4';

const Feedback = ({ request }) => {
    const location = useLocation();
    const feedback = location.state;
    const navigate = useNavigate();
    if (!feedback || !feedback.message || !feedback.type) {
        return null;
    }

    ReactGa.send({ hitType: 'pageview', page: '/feedback' });

    const score = localStorage.getItem('score') || 0;
    const guessedNumbers = JSON.parse(localStorage.getItem('guessedNumbers'));
    const total = numberData.length;

    if (guessedNumbers.length === total) {
        return navigate('/done');
    }

    return (
        <div>
            <p className={`feedback-${feedback.type}`}>{feedback.message}</p>
            <p>Je score is: {score}</p>
            <p>Je hebt {guessedNumbers.length} van de {total} nummers geraden.</p>
            <p>Ga door naar het volgende huis, en scan daar de QR code.</p>
        </div>
    );
};

export default Feedback;