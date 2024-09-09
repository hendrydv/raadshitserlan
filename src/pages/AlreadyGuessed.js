import React from 'react';
import ReactGa from 'react-ga4';

const AlreadyGuessed = ({ request }) => {
    ReactGa.send({ hitType: 'pageview', page: '/already-guessed' });

    return (
        <div>
            <p>Je hebt dit nummer al geraden!</p>
            <p>Ga door naar het volgende huis, en scan daar de QR code.</p>
        </div>
    );
};

export default AlreadyGuessed;