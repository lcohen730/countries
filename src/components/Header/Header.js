import styles from './Header.module.scss';

export default function Header() {
    return (
        <div className={styles.header}>
            <h2>Where in the world?</h2>
            <div className={styles.mode}>
                <img 
                    src="https://img.icons8.com/?size=100&id=45474&format=png&color=000000" 
                    alt="Dark Mode" 
                />
                <p>Dark Mode</p>
            </div>
        </div>
    )
}