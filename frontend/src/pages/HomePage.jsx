import styles from '../css/homepage.module.css';
import Logo from '../assets/Astro-society.png'

export const HomePage = () => {


    return (
        <div className={styles.HomepageBox}>
            <div className={styles.imageBox}>
                <img src={Logo} alt="" width={"100%"} />
            </div>
            <h1>Welcome to Astro Society</h1>
            <p>Go to login or register</p>
        </div>
    )
}
