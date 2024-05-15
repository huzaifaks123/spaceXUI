// import styles from style modules
import styles from '../styles/LaunchOverTime.module.css';

// import Chart to render bar graph
import Chart from 'react-apexcharts'


export default function LaunchOverTime({ timeline }) {
    let year = {};

    // function to get no. of year
    timeline.map((period) => {
        const { launch_year } = period;
        if (!year[launch_year]) {
            year[launch_year] = 1;
        } else {
            year[launch_year]++;
        }
    });
    console.log(year);

    return (
        <div className={styles.cardList}>
            <Chart
                type='bar'
                className={`${styles.chartContainer}`}
                series={[
                    {
                        name: "Count",
                        data: Object.keys(year).map((yearKey) => ({
                            x: yearKey,
                            y: year[yearKey],
                        })),
                    },
                ]}
                options={{}}
            >

            </Chart>
        </div>
    )
}