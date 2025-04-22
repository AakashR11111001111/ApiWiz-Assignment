import { useState, useEffect, useContext } from "react";
import styles from "./NoteContainer.module.css";
import SavedNotes from "../SavedNotes/SavedNotes";
import { DarkModeContext } from "../Main/Main";

const moods = [
    { type: "happy", emoji: "😊", color: "#F8D664" },
    { type: "good", emoji: "🫠", color: "#FF8C00" },
    { type: "neutral", emoji: "😑", color: "#ff0065" },
    { type: "unhappy", emoji: "😤", color: "#3D4B4A" },
    { type: "angry", emoji: "🤬", color: "#FF0000" },
];

const NoteContainer = ({ weatherDetails, city }) => {
    const [bgColor, setBgColor] = useState("#fff");
    const [selectedMood, setSelectedMood] = useState(null);
    const [addNote, setAddNote] = useState(false);
    const [note, setNote] = useState("");
    const [diaryEntries, setDiaryEntries] = useState([]);
    const { darkMode } = useContext(DarkModeContext);

    const handleMoodSelect = (mood, color) => {
        setSelectedMood(mood);
        setBgColor(color);
    };

    useEffect(() => {
        const savedEntries = JSON.parse(localStorage.getItem("diaryEntries")) || [];
        setDiaryEntries(savedEntries);

        const moodObj = moods.find((m) => m.type === selectedMood);
        if (moodObj) {
            document.body.style.backgroundColor = moodObj.color;
        } else {
            document.body.style.backgroundColor = "#ffffff";
        }
    }, [selectedMood]);

    const handleSaveNote = () => {
        if (note.trim() === "") {
            alert("Please write something in your note!");
            return;
        }
    
        const currentDate = new Date();
        const date = currentDate.toLocaleDateString();
        const time = currentDate.toLocaleTimeString();
    
        const moodObj = moods.find((m) => m.type === selectedMood);
        const moodColor = moodObj ? moodObj.color : "#ffffff"; 
    
        const diaryEntry = {
            note,
            mood: selectedMood,
            moodColor,
            temperature: weatherDetails?.main?.temp,
            weatherDescription: weatherDetails?.weather[0]?.description, 
            date,
            time,
            location: city,  
        };
    
        let updatedEntries = [...diaryEntries, diaryEntry];
        localStorage.setItem("diaryEntries", JSON.stringify(updatedEntries));
        setDiaryEntries(updatedEntries);  

        setNote("");
        setSelectedMood(null);
        setAddNote(false);
        alert("Note saved successfully!");
    };

    return (
        <>
            <div
                className={styles.noteContainer}
                style={{
                    backgroundColor: darkMode ? "#333" : selectedMood ? bgColor : "#fff",
                    boxShadow: darkMode ? "0 0 10px rgba(255, 255, 255, 0.2)" : "0 0 10px rgba(0, 0, 0, 0.1)",
                }}
            >
                <h2 style={{ color: darkMode ? "white" : "black" }}>Select Your Mood</h2>
                <div className={styles.moodOptions}>
                    {moods.map((mood) => (
                        <button
                            key={mood.type}
                            className={`${styles.moodButton} ${selectedMood === mood.type ? styles.active : ""}`}
                            onClick={() => handleMoodSelect(mood.type, mood.color)}
                            style={{
                                backgroundColor: selectedMood === mood.type ? mood.color : "transparent",
                                color: darkMode ? "#fff" : "#000",
                            }}
                        >
                            {mood.emoji}
                        </button>
                    ))}
                </div>

                {addNote ? (
                    <>
                        <textarea
                            className={styles.noteInput}
                            placeholder="Write your note here..."
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                        />
                        <button className={styles.saveBtn} onClick={handleSaveNote}>
                            Save Note
                        </button>
                    </>
                ) : (
                    <button onClick={() => setAddNote(true)} className={styles.addBtn}>
                        Add Note
                    </button>
                )}
            </div>

            <SavedNotes diaryEntries={diaryEntries} />
        </>
    );
};

export default NoteContainer;
