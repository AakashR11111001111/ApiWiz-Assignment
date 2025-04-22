import { createContext, useEffect, useState } from "react";
import Preloader from "../PreLoader/Preloader";
import axios from "axios";
import Header from "../Header/Header";
import NoteContainer from "../NoteContainer/NoteContainer";

const API_KEY_OPEN_CAGE = "a3f208dbbff04021aa2caa4bd7e2962b";
const API_KEY_OPEN_WEATHER = "8e629c1bfe427ec82cc4415038eb7e56";

export const DarkModeContext = createContext();

const Main = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [weatherDetails, setWeatherDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [note, setNote] = useState("");
    const city = weatherData?.results[0]?.components?.city || weatherData?.results[0]?.components?.town || 'Delhi';

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            try {
                const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${lat},${lon}&key=${API_KEY_OPEN_CAGE}`);
                console.log(response);                
                setWeatherData(response.data);
                

            } catch (error) {
                console.error("Error fetching location data:", error);
            }

            setTimeout(() => {
                setLoading(false);
            }, 8000);
        });
    }, []);

    useEffect(() => {
        const fetchWeatherDetails = async () => {
            if (city) {
                try {
                    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY_OPEN_WEATHER}&units=metric`);
                    setWeatherDetails(response.data);
                    console.log("Weather Details:", response.data);
                } catch (error) {
                    console.error("Error fetching weather details:", error);
                }
            }
        };

        fetchWeatherDetails();
    }, [city]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    const handleSaveNote = () => {
        const currentDate = new Date();
        const date = currentDate.toLocaleDateString();
        const time = currentDate.toLocaleTimeString();

        const diaryEntry = {
            note,
            temperature: weatherDetails.main?.temp,
            date,
            time,
            location: city,
        };

        let diaryEntries = JSON.parse(localStorage.getItem("diaryEntries")) || [];
        diaryEntries.push(diaryEntry);
        localStorage.setItem("diaryEntries", JSON.stringify(diaryEntries));
        setNote("");
    };

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            <div className={darkMode ? "dark" : ""}>
                {loading ? (
                    <Preloader />
                ) : (
                    <div>
                        {weatherData?.results[0]?.components ? (
                            <div style={{ background: darkMode ? '#333' : '#fff', color: darkMode ? '#fff' : '#000' }}>
                            </div>
                        ) : (
                            <p>Unable to fetch location data.</p>
                        )}

                        {
                            weatherDetails && (
                                <div style={{ background: darkMode ? '#444' : '#eee', color: darkMode ? '#000' : '#111', height: "100vh", width:"100%" }}>
                                    <Header city={city} temperature={weatherDetails.main?.temp} status={weatherDetails.weather[0].main} />
                                    <NoteContainer weatherDetails={weatherDetails} note={note} setNote={setNote} handleSaveNote={handleSaveNote} />
                                </div>
                            )
                        }
                    </div>
                )}
            </div>
        </DarkModeContext.Provider>
    );
};

export default Main;
