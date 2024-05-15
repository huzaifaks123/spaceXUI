// import styles from style modules
import styles from '../styles/LaunchTimeLine.module.css';

export default function LaunchTimeLine({ timeline }) {

    return (
        <>
            <div className={styles.cardList}>
                {timeline.map((mission, index) => (
                    <div className={styles.card} key={index}>
                        <p className={styles.para}>Launch Timeline (UTC) : {mission.launch_date_utc}</p>
                    </div>
                ))}
            </div>
        </>
    )
}