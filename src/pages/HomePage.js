import styles from '../styles/homepage.module.css'

// import necessory hooks from react
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// import asynchrounous thunk and selectors to fetch at dispatch
import { upcomingAsyncThunk ,pastAsyncThunk} from "../redux/reducers/LaunchCardReducer";
import { LaunchpadSelector, launchpadAsyncThunk } from "../redux/reducers/LaunchpadLocationReducer";
import { LaunchTimelineSelector, timelineAsyncThunk } from "../redux/reducers/LaunchTimelineReducer";
import { LaunchCardSelector } from "../redux/reducers/LaunchCardReducer";

// import required components
import LaunchCard from "../components/LaunchCard";
import LaunchTimeLine from "../components/LaunchTimeLine";
import LaunchpadLocation from "../components/LaunchpadLocation";
import LaunchOverTime from "../components/LaunchOverTIme";

export default function HomePage(){
    
    const dispatch = useDispatch()
    const [isloading, setIsLoading] = useState(true)

    useEffect(() => {
          dispatch(upcomingAsyncThunk());
          dispatch(pastAsyncThunk());
          dispatch(timelineAsyncThunk())
          dispatch(launchpadAsyncThunk())
          setIsLoading(false)    
    }, [dispatch]);

    const { upcoming, past, total } = useSelector(LaunchCardSelector)
    const { timeline } = useSelector(LaunchTimelineSelector)
    const { location } = useSelector(LaunchpadSelector)

    if(isloading){
        return <div className="text-center">Loading...</div>
    }

    return (
        <div className={`w-100 ${styles.container}`}>
            <div className={`border m-2 rounded ${styles.launchCardContainer}`}>
                <h4 className="m-0 text-center">Launch Dashboard</h4>
                <div className={`${styles.cardList}`}>
                <LaunchCard data={upcoming}/>
                <LaunchCard data={past}/>
                <LaunchCard data={total}/>
                </div>
            </div>
            <div className='d-lg-flex flex-lg-row d-md-flex flex-md-row d-sm-flex flex-sm-column space-between w-100 justify-content-around'>
                <div className={`border w-100 rounded m-2 ${styles.locationContainer}`}>
                <h4 className="text-center">Launchpad Location</h4>
                <LaunchpadLocation coordinates={location}/>
                </div>
                <div className={`border w-100 rounded m-2 ${styles.launchOverTimeContainer}`}>
                <h4 className="text-center">Launch Over Time</h4>
                <LaunchOverTime timeline={timeline}/>
                </div>
                <div className={`border w-100 rounded m-2 ${styles.TimelineContainer}`}>
                <h4 className="text-center">Launch Timeline</h4>
                <LaunchTimeLine timeline={timeline}/>
                </div>
            </div>
        </div>
    )
}


