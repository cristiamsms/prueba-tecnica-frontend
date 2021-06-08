"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
const redux_1 = require("redux");
const redux_thunk_1 = __importDefault(require("redux-thunk"));
const rootReducer_1 = require("../reducers/rootReducer");
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || redux_1.compose;
exports.store = redux_1.createStore(rootReducer_1.rootReducer, composeEnhancers(redux_1.applyMiddleware(redux_thunk_1.default)));
//# sourceMappingURL=store.js.map