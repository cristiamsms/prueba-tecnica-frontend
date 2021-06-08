"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainApp = void 0;
const react_1 = __importDefault(require("react"));
const AppRouter_1 = require("./routers/AppRouter");
const store_1 = require("./store/store");
const react_redux_1 = require("react-redux");
const MainApp = () => {
    return (react_1.default.createElement(react_redux_1.Provider, { store: store_1.store },
        react_1.default.createElement(AppRouter_1.AppRouter, null)));
};
exports.MainApp = MainApp;
//# sourceMappingURL=MainApp.js.map