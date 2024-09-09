import React from 'react';
import ReactGa from 'react-ga4';

const Done = ({ request }) => {
    const score = localStorage.getItem('score') || 0;

    ReactGa.send({ hitType: 'pageview', page: '/done' });

    return (
        <div>
            <p>Je bent klaar met het spel, je hebt een totale score van {score}.</p>
            <p>Bedankt voor het spelen!</p>
        </div>
    );
};

export default Done;