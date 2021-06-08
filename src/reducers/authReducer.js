"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authReducer = void 0;
const types_1 = require("../types/types");
const initialState = {
    checking: true,
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types_1.types.authLogin:
            return Object.assign(Object.assign(Object.assign({}, state), { checking: false }), action.payload);
        case types_1.types.authCheckingFinish:
            return Object.assign(Object.assign({}, state), { checking: false });
        case types_1.types.authLogout:
            return {
                checking: false
            };
        default:
            return state;
    }
};
exports.authReducer = authReducer;
//# sourceMappingURL=authReducer.js.map