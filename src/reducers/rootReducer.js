"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootReducer = void 0;
const redux_1 = require("redux");
const authReducer_1 = require("./authReducer");
const planReducer_1 = require("./planReducer");
exports.rootReducer = redux_1.combineReducers({
    auth: authReducer_1.authReducer,
    plan: planReducer_1.planReducer
});
//# sourceMappingURL=rootReducer.js.map