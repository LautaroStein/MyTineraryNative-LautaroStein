import { combineReducers } from "redux"
import citiesReducer from "./citiesReducer"
import itineraryReducer from "./itineraryReducer"
import userReducers from "./userReducers"

const mainReducer = combineReducers({
    citiesReducer,
    itineraryReducer,
    userReducers

})

export default mainReducer