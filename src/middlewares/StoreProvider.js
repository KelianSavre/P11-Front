import {configureStore} from "@reduxjs/toolkit"

import combineReducers from "../reducers/reducer"

const store = configureStore({
    reducer : combineReducers,
    devTools: true
})


export default store