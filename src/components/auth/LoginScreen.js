"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginScreen = void 0;
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const auth_1 = require("../../actions/auth");
require("./login.css");
const LoginScreen = () => {
    const dispatch = react_redux_1.useDispatch();
    const [login, setlogin] = react_1.useState({
        lEmail: '',
        lPassword: ''
    });
    const { lEmail, lPassword } = login;
    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(auth_1.startLogin(lEmail, lPassword));
    };
    const onChange = (event) => {
        {
            setlogin(Object.assign(Object.assign({}, login), { [event.target.name]: event.target.value }));
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "navbar navbar-dark bg-dark mb-4" },
            react_1.default.createElement("span", { className: "navbar-brand" }),
            react_1.default.createElement(react_router_dom_1.Link, { className: "btn btn-outline-primary ", to: "/" }, "Atras")),
        react_1.default.createElement("div", { className: "container" },
            react_1.default.createElement("div", { className: "row" },
                react_1.default.createElement("div", { className: "col-md-6" },
                    react_1.default.createElement("div", { className: "card" },
                        react_1.default.createElement("form", { onSubmit: handleLogin, className: "box" },
                            react_1.default.createElement("h1", null, "Login"),
                            react_1.default.createElement("p", { className: "text-muted" }, " Digita tu correo y contrase\u00F1a"),
                            react_1.default.createElement("input", { type: "text", name: "lEmail", placeholder: "Correo", value: lEmail, onChange: (event) => onChange(event) }),
                            react_1.default.createElement("input", { type: "password", name: "lPassword", placeholder: "Contrase\u00F1a", value: lPassword, onChange: (event) => onChange(event) }),
                            react_1.default.createElement("input", { type: "submit", value: "Login" }))))))));
};
exports.LoginScreen = LoginScreen;
//# sourceMappingURL=LoginScreen.js.map