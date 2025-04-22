import styles from "./Header.module.css";
const Header = ({city, temperature, status}) => {
    return (
        <div className={styles.header}>
            <div>
                <h2><img src="/icons/location.png" alt="" /> {city}</h2>
            </div>
            <div>
                <h2> <img src="/icons/cloud.png" alt="" /> {status}</h2>
            </div>
            <div>
                <h2> <img src="/icons/temperature.png" alt="" />{temperature}°C</h2>
            </div>

        </div>
    )
}

export default Header;