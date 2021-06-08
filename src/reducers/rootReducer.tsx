import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { planReducer } from "./planReducer";






export const rootReducer=combineReducers({

    auth:authReducer,
    plan:planReducer
})