"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navbar = void 0;
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const auth_1 = require("../../actions/auth");
const Navbar = () => {
    const dispatch = react_redux_1.useDispatch();
    const handleLogout = () => {
        dispatch(auth_1.startLogout());
    };
    return (react_1.default.createElement("div", { className: "navbar navbar-dark bg-dark mb-4" },
        react_1.default.createElement("span", { className: "navbar-brand" }),
        react_1.default.createElement("button", { className: "btn btn-outline-danger", onClick: handleLogout },
            react_1.default.createElement("i", { className: "fas fa-sign-out-alt" }),
            react_1.default.createElement("span", null, "Log out"))));
};
exports.Navbar = Navbar;
//# sourceMappingURL=Navbar.js.map