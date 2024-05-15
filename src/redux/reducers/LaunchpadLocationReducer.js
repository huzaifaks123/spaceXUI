import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    location : {}
};

export const launchpadAsyncThunk= createAsyncThunk(
    'fetchLocation',
    async(_,ThunkApi) => {
        try {
            const response = await fetch("https://api.spacexdata.com/v3/landpads/LZ-4");
            const data = await response.json();
            ThunkApi.dispatch(setLocation(data.location));
        } catch (error) {
            console.log("Error while fetching data from API :", error);
        }
    }
)

const launchpadSlice = createSlice({
    name : "Timeline",
    initialState,
    reducers : {
        setLocation : (state, action) => {
            state.location = action.payload
        }
    }
})

export const LaunchpadReducer = launchpadSlice.reducer;

export const {setLocation} = launchpadSlice.actions;

export const LaunchpadSelector = (state) => state.LaunchpadReducer;
