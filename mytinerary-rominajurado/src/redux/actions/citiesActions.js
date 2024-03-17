import { createAction } from "@reduxjs/toolkit";

export const load = createAction('loadCities', (cities)=>{
    return{
        payload:cities
    }
})
export const loadCity = createAction('loadCity', (city)=>{
    return{
        payload:city
    }
})

export const filterByName = createAction('filterByName', ( value ) => {
    return{
        payload:value
    }
})