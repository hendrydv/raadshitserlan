import React, {useState} from "react";
import FuzzySet from 'fuzzyset.js';
import '../styles/SongPicker.css';
import '../data/numbers.json';

const SongPicker = ({number}) => {
    let numberData = require('../data/numbers.json');

    const [formData, setFormData] = useState({
        artist: '',
        title: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleChoose = () => {
        const currentNumber = numberData.find(n => n.number === parseInt(number));

        if (currentNumber) {
            const artist = currentNumber.artist;
            const title = currentNumber.title;

            const artistCorrect = check(artist, formData.artist);
            const titleCorrect = check(title, formData.title);

            if (!artistCorrect && titleCorrect) {
                alert('Artiest is fout, titel is goed');
                return;
            }

            if (artistCorrect && !titleCorrect) {
                alert('Artiest is goed, titel is fout');
                return;
            }

            if (!artistCorrect && !titleCorrect) {
                alert('Artiest en titel zijn fout');
                return;
            }

            alert('Artiest en titel zijn goed');
        }
    }

    const check = (expected, actually) => {
        let expectedSet = FuzzySet([expected]);
        let result = expectedSet.get(actually);

        return !!(result && result[0][0] > 0.7);
    }

    return (
        <div className="song-picker-form">
            <label>
                Artiest:
                <input type="text" name="artist" placeholder="Artiest" value={formData.artist} onChange={handleChange}/>
            </label>
            <label>
                Titel:
                <input type="text" name="title" placeholder="Titel" value={formData.title} onChange={handleChange}/>
            </label>

            <button onClick={handleChoose}>
                Controleren
            </button>
        </div>
    );
}

export default SongPicker;