import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    timeline : [],
};

export const timelineAsyncThunk = createAsyncThunk(
    'fetchUpcoming',
    async(_,ThunkApi) => {
        try {
            const response = await fetch("https://api.spacexdata.com/v3/launches");
            let data = await response.json();
            ThunkApi.dispatch(setTimeline(data));
        } catch (error) {
            console.log("Error while fetching data from API :", error);
        }
    }
)

const LaunchTimelineSlice = createSlice({
    name : "Timeline",
    initialState,
    reducers : {
        setTimeline : (state, action) => {
            state.timeline = action.payload
        }
    }
})

export const LaunchTimelineReducer = LaunchTimelineSlice.reducer;

export const {setTimeline} = LaunchTimelineSlice.actions;

export const LaunchTimelineSelector = (state) => state.LaunchTimelineReducer;
