import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    upcoming : [],
    past : [],
    total : []
};

export const upcomingAsyncThunk = createAsyncThunk(
    'fetchUpcoming',
    async(_,ThunkApi) => {
        try {
            const response = await fetch("https://api.spacexdata.com/v3/launches/upcoming");
            let data = await response.json();
            data = data.slice(0, 10);
            ThunkApi.dispatch(setUpcoming(data));
            ThunkApi.dispatch(setTotal(data))
        } catch (error) {
            console.log("Error while fetching data from API :", error);
        }
    }
)
export const pastAsyncThunk = createAsyncThunk(
    'fetchPast',
    async(_,ThunkApi) => {
        try {
            const response = await fetch("https://api.spacexdata.com/v3/launches/past");
            let data = await response.json();
            data = data.slice(0, 15);
            ThunkApi.dispatch(setPast(data));
            ThunkApi.dispatch(setTotal(data))
        } catch (error) {
            console.log("Error while fetching data from API :", error);
        }
    }
)

const LaunchCardSlice = createSlice({
    name : "LaunchCard",
    initialState,
    reducers : {
        setUpcoming : (state, action) => {
            state.upcoming = action.payload
        },
        setPast : (state, action) => {
            state.past = action.payload
        },
        setTotal : (state, action) => {
            state.total = [...state.total,...action.payload]
        }
    }
})

export const LaunchCardReducer = LaunchCardSlice.reducer;

export const {setUpcoming, setPast, setTotal} = LaunchCardSlice.actions;

export const LaunchCardSelector = (state) => state.LaunchCardReducer;
