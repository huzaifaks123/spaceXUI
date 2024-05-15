// import styles from style modules
import styles from '../styles/launchcard.module.css';

export default function LaunchCard({data}) {

    return (
        <>
            <div className={`${styles.cardList}`}>
                <h5 className=  {`w-100 text-center position-sticky top-0 ${styles.headbg}`}>{data.length < 15?"Upcoming":data.length > 15?"Total":"Past"}</h5>
                {data.map((mission, index) => (
                    <div className={styles.card} key={index}>
                        <h6>{mission.mission_name}</h6>
                        <p>Flight Number: {mission.flight_number}</p>
                        <p>Launch Date (UTC): {mission.launch_date_utc}</p>
                        <p>Rocket Name: {mission.rocket.rocket_name}</p>
                        <p>Mission Name: {mission.mission_name}</p>
                        <p>Launch Success: {mission.launch_success ? 'Yes' : 'No'}</p>
                        <a href={mission.links.wikipedia} target="_blank" rel="noopener noreferrer">Wikipedia</a>
                    </div>
                ))}
            </div>
        </>
    )
}