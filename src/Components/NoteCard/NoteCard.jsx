import { useContext } from 'react';
import styles from './NoteCard.module.css';
import { DarkModeContext } from '../Main/Main';

const NoteCard = ({ date, time, note, weatherDescription, temperature, mood }) => {
    const DarkModeCtx = useContext(DarkModeContext);

    const textStyles = {
        fontSize: '1rem',
        marginBottom: '8px',
    };

    return (
        <div className={styles.noteCard} style={{ backgroundColor: DarkModeCtx.darkMode ? '#333' : '#f9f9f9', color: DarkModeCtx.darkMode ? '#fff' : '#000'}}>
            <h3>{date} - {time}</h3>
            <p style={textStyles}>{note}</p>
            <p style={textStyles}><strong>Weather:</strong> {weatherDescription}, {temperature}°C</p>
            <p style={textStyles}><strong>Mood:</strong> {mood}</p>
        </div>
    );
};

export default NoteCard;
