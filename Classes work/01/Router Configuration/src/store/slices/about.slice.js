import { createSlice } from "@reduxjs/toolkit";
import { clientLogos, services, testimonials } from "../../constants/about.constant";



export const aboutSlice = createSlice({
    name: "about",
    initialState: {
        testimonials,
        services,
        clientLogos
    },
    reducers: {
        addService: (state, action) => {
            state.services.push(action.payload)
        },
        removeService: (state, action) => {
            state.services = state.services.filter((service) => service.id !== action.payload.id);
        },



        addTestiomonial: (state, action) => {
            state.testimonials.push(action.payload)
        },
        removeTestiomonial: (state, action) => {
            state.testimonials = state.testimonials.filter((testimonial) => testimonial.id !== action.payload.id);
        },



        addClientLogo: (state, action) => {
            state.clientLogos.push(action.payload)
        },
        removeClientLogo: (state, action) => {
            state.clientLogos = state.clientLogos.filter((logo) => logo.id !== action.payload.id);
        },

    }

})

export const { addService, removeService, addTestiomonial, removeTestiomonial, addClientLogo, removeClientLogo } = aboutSlice.actions