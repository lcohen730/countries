import styles from './FilterDropDown.module.scss';

export default function FilterDropDown() {
    return (
        <div className={styles.dropDown}>
            <p>Filter by Region</p>
            <p>▼</p>
        </div>
    );
}