import { createReducer } from "@reduxjs/toolkit";
import { login, logout } from "../actions/userActions";

const initialState = {
    user: {}
}

const userReducer = createReducer( initialState, ( builder ) => {
    builder
        .addCase( login, ( state, action ) => {
            return {...state, user: action.payload} // (copia del estado anterior, usuario que me va a llegar x la accion)
        } )
        .addCase( logout, (state, action) => {
            return initialState //retorna el nuevo valor
        } )
} )

export default userReducer