import NoteCard from '../NoteCard/NoteCard';
import styles from './SavedNotes.module.css';

const SavedNotes = ({ diaryEntries }) => {
    return (
        <div className={styles.savedNotesContainer}>
            <h1 className={styles.head}>Saved Notes</h1>
            
            {diaryEntries.length > 0 ? (
                <div className={styles.notesList}>
                    {diaryEntries.map((entry, idx) => (
                        <NoteCard key={idx} date={entry.date} time={entry.time} note={entry.note} weatherDescription={entry.weatherDescription} temperature={entry.temperature} mood={entry.mood} location={entry.location}
                        />
                    ))}
                </div>
            ) : (
                <p className={styles.p}>No saved notes yet.</p>
            )}
        </div>
    );
};

export default SavedNotes;
