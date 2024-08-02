import styles from './SearchBar.module.scss';

export default function SearchBar() {
    return (
        <div className={styles.searchBar}>
            <img 
                src="https://img.icons8.com/?size=100&id=82712&format=png&color=000000" 
                alt="search icon" 
            />
            <input 
                type="text" 
                placeholder="Search for a country..." 
            />
        </div>
    );
}