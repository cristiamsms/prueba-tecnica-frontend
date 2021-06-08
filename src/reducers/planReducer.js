"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.planReducer = void 0;
const types_1 = require("../types/types");
const initialState = {
    planes: []
};
const planReducer = (state = initialState, action) => {
    switch (action.type) {
        case types_1.types.planAddNew:
            return Object.assign(Object.assign({}, state), { planes: [...state.planes, action.payload] });
        case types_1.types.planUpdate:
            return Object.assign(Object.assign({}, state), { planes: state.planes.map(e => (e.id === action.payload.id) ? action.payload : e) });
        case types_1.types.planDeleted:
            return Object.assign(Object.assign({}, state), { planes: state.planes.filter(e => (e.id !== state.activePlan.id)), activePlan: null });
        case types_1.types.planLoaded:
            return Object.assign(Object.assign({}, state), { planes: [...action.payload] });
        default:
            return state;
    }
};
exports.planReducer = planReducer;
//# sourceMappingURL=planReducer.js.map