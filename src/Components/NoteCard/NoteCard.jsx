import styles from './NoteCard.module.css';

const NoteCard = ({ date, time, note, weatherDescription, temperature, mood }) => {
    return (
        <div className={styles.noteCard}>
            <h3>{date} - {time}</h3>
            <p>{note}</p>
            <p><strong>Weather:</strong> {weatherDescription}, {temperature}°C</p>
            <p><strong>Mood:</strong> {mood}</p>
        </div>
    );
};

export default NoteCard;
