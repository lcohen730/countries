import styles from './FilterOptions.module.scss';

export default function FilterOptions() {
    return (
        <ul className={styles.options}>
            <li>Africa</li>
            <li>America</li>
            <li>Asia</li>
            <li>Europe</li>
            <li>Oceania</li>
        </ul>
    );
}