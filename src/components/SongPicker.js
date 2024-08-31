import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import FuzzySet from 'fuzzyset.js';
import '../styles/SongPicker.css';
import numberData from '../data/numbers.json';

const SongPicker = ({number}) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        artist: '',
        title: '',
    });

    const [feedback, setFeedback] = useState({
        type: '',
        message: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const redirectFeedback = (data) => {
        return navigate('/feedback', {
            state: data,
        })
    }

    const handleChoose = async () => {
        if (!formData.artist || !formData.title) {
            setFeedback({
                type: 'error',
                message: 'Vul beide velden in',
            });
            return;
        }

        const currentNumber = numberData.find(n => n.number === parseInt(number));

        if (currentNumber) {
            const guessedNumbers = JSON.parse(localStorage.getItem('guessedNumbers'));
            guessedNumbers.push(number);
            localStorage.setItem('guessedNumbers', JSON.stringify(guessedNumbers));

            const artistCorrect = check(currentNumber.artist, formData.artist);
            const titleCorrect = check(currentNumber.title, formData.title);

            const message = wrongMessage(artistCorrect, titleCorrect);
            if (message) {
                redirectFeedback({
                    type: 'error',
                    message: message,
                });
                return;
            }

            localStorage.setItem('score', localStorage.getItem('score') + 2);
            redirectFeedback({
                type: 'success',
                message: 'Artiest en titel zijn beide goed, hiermee heb je 2 punten verdiend!',
            });
        }
    }

    const check = (expected, actually) => {
        let expectedSet = FuzzySet([expected]);
        let result = expectedSet.get(actually);

        return !!(result && result[0][0] > 0.7);
    }

    const wrongMessage = (artistCorrect, titleCorrect) => {
        if (!artistCorrect && titleCorrect) {
            localStorage.setItem('score', localStorage.getItem('score') + 1);
            return 'Artiest is fout maar de titel is goed, hiermee heb je 1 punt verdiend!';
        }

        if (artistCorrect && !titleCorrect) {
            localStorage.setItem('score', localStorage.getItem('score') + 1);
            return 'Artiest is goed maar de titel is fout, hiermee heb je 1 punt verdiend!';
        }

        if (!artistCorrect && !titleCorrect) {
            return 'Artiest en titel zijn beide fout, hiermee heb je helaas geen punten verdiend.';
        }
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

            {feedback.message && <div className={`feedback-${feedback.type}`}>{feedback.message}</div>}
        </div>
    );
}

export default SongPicker;