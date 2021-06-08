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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainScreen = void 0;
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const plans_1 = require("../actions/plans");
const carts_1 = __importDefault(require("./carts"));
require("./Main.css");
const MainScreen = () => {
    const [loading, setLoading] = react_1.useState(true);
    const dispatch = react_redux_1.useDispatch();
    const plan = react_redux_1.useSelector((state) => state.plan);
    react_1.useEffect(() => {
        dispatch(plans_1.planStartLoading());
        setLoading(false);
    }, [dispatch]);
    if (loading) {
        return react_1.default.createElement("h1", null, "Cargando ...");
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "navbar navbar-dark bg-dark mb-4" },
            react_1.default.createElement("span", { className: "navbar-brand" }),
            react_1.default.createElement(react_router_dom_1.Link, { className: "btn btn-outline-primary ", to: "/login" }, "Login")),
        react_1.default.createElement("div", { className: "container-carts" }, plan.planes.map((item) => item && (item.estado) && react_1.default.createElement(carts_1.default, { price: item.valor, list: JSON.parse(item.detalle), description: item.descripcion, title: item.titulo })))));
};
exports.MainScreen = MainScreen;
//# sourceMappingURL=MainScreen.js.map