import { createSlice } from "@reduxjs/toolkit";
import { projectsData } from "../../constants/portfolio.constant";






export const portfolioslice = createSlice({
    name: "portfolio",
    initialState: {
        projectsData,
    },
    reducers: {
        loadmoredata: (state,action) => {
            state.projectsData = action.payload;
        }
    },
})

export const {loadmoredata}   = portfolioslice.actions;
