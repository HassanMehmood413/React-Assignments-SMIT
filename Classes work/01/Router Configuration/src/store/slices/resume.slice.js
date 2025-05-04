import { createSlice } from "@reduxjs/toolkit";
import { EducationData as FullEducationData, ExperienceData as FullExperienceData } from "../../constants/resume.constant";

const initialLoadCount = 3;

export const resumeslice = createSlice({
  name: "resume",
  initialState: {
    fullEducationData: FullEducationData,
    fullExperienceData: FullExperienceData,
    EducationData: FullEducationData.slice(0, initialLoadCount),
    ExperienceData: FullExperienceData.slice(0, initialLoadCount),
    loadCount: 1,
  },
  reducers: {
    loadmoredata: (state, action) => {
      // If payload is passed, add it to ExperienceData or EducationData
      if (action.payload) {
        const { section, data } = action.payload;
        if (section === "experience") {
          state.ExperienceData.push(...data);
        } else if (section === "education") {
          state.EducationData.push(...data);
        }
      } else {
        // Default behavior: load more from full data
        state.loadCount += 1;
        const itemsToShow = state.loadCount * initialLoadCount;
        state.EducationData = state.fullEducationData.slice(0, itemsToShow);
        state.ExperienceData = state.fullExperienceData.slice(0, itemsToShow);
      }
    },
  },
});

export const { loadmoredata } = resumeslice.actions;
