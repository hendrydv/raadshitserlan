import React, {useRef, useState} from "react";

const Player = ({number}) => {
    const audioRef = useRef();

    const [isPlaying, setIsPlaying] = useState(false);
    const [icon, setIcon] = useState('play');

    const audioFile = `/songs/${number}.mp3`;

    const playAudio = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
            setIcon('play');
            return;
        }

        audioRef.current.play();
        setIsPlaying(true);
        setIcon('pause');
    }

    return (
        <div>
            <button className="play-button" onClick={playAudio}>
                <i className={`fas fa-${icon}`}></i>
            </button>
            <audio ref={audioRef}>
                <source src={audioFile} type="audio/mp3"/>
                Your browser does not support the audio element.
            </audio>
        </div>
    );
};

export default Player;