import React from 'react';

const Done = ({ request }) => {
    const score = localStorage.getItem('score') || 0;

    return (
        <div>
            <p>Je bent klaar met het spel, je hebt een totale score van {score}.</p>
            <p>Bedankt voor het spelen!</p>
        </div>
    );
};

export default Done;