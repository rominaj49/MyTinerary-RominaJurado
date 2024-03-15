import { createReducer } from "@reduxjs/toolkit";
import { filterByName, load } from '../actions/citiesActions'

const initialState = {
    all:[],      //va a iniciar con toods
    filtered:[],
    search: ""
}

const reducer = createReducer(initialState, (builder) => {
    builder.addCase(load, (state,action) => {
      /*  const copiaState = {...state} //copia del estado como estaba antes
        copiaState.all = action.payload //estado despues de cargar
        copiaState.filtered = action.payload
        return copiaState*/
        return {...state, all: action.payload, filtered:action.payload}
    }).addCase( filterByName, ( state, action) => {
        const fnFilter = (cities) => cities.name.toLowerCase().startsWith(action.payload.toLowerCase())
        const aux = state.all.filter(fnFilter)
        return{...state, filtered:aux, search:action.payload}
    })
})

export default reducer