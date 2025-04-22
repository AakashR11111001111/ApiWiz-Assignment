import { useContext } from "react";
import styles from "./Header.module.css";
import { DarkModeContext } from "../Main/Main";

const Header = ({ city, temperature, status }) => {
    const DarkModeCtx = useContext(DarkModeContext);

    return (
        <div className={styles.header}>
            <div>
                <h2><img src="/icons/location.png" alt="" /> {city}</h2>
            </div>
            <div>
                <h2> <img src="/icons/cloud.png" alt="" /> {status}</h2>
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <h2> <img src="/icons/temperature.png" alt="" />{temperature}°C</h2>
                <img 
                    onClick={DarkModeCtx.toggleDarkMode} 
                    className={styles.toggleimg} 
                    src={DarkModeCtx.darkMode ? "/icons/lightMode.png" : "/icons/nightMode.png"} 
                    alt="Toggle Dark Mode" 
                />
            </div>
        </div>
    );
}

export default Header;
