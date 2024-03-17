import { createReducer } from "@reduxjs/toolkit";
import { filterByName, load, loadCity } from '../actions/citiesActions'

const initialState = {
    all:[],      //va a iniciar con toods
    filtered:[],
    search: "",
    city:[],

}

const reducer = createReducer(initialState, (builder) => {
    builder.addCase(load, (state,action) => {
        return {...state, all: action.payload, filtered:action.payload}
    }).addCase( filterByName, ( state, action) => {
        const fnFilter = (cities) => cities.name.toLowerCase().startsWith(action.payload.toLowerCase())
        const aux = state.all.filter(fnFilter)
        return{...state, filtered:aux, search:action.payload}
    })
    .addCase(loadCity, (state, action) => {
        return { ...state, city: action.payload };
      })
  
})


export default reducer