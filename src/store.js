import {configureStore} from '@reduxjs/toolkit'

import { LaunchCardReducer } from './redux/reducers/LaunchCardReducer';
import { LaunchTimelineReducer } from './redux/reducers/LaunchTimelineReducer';
import { LaunchpadReducer } from './redux/reducers/LaunchpadLocationReducer';

export const store = configureStore({
    reducer:{
        LaunchCardReducer,
        LaunchTimelineReducer,
        LaunchpadReducer
    }
})