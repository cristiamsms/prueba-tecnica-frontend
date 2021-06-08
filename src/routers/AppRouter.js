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
exports.AppRouter = void 0;
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const auth_1 = require("../actions/auth");
const AdminScreen_1 = require("../components/admin/AdminScreen");
const LoginScreen_1 = require("../components/auth/LoginScreen");
const MainScreen_1 = require("../components/MainScreen");
const PrivateRoute_1 = require("./PrivateRoute");
const PublicRoute_1 = require("./PublicRoute");
const AppRouter = () => {
    const dispatch = react_redux_1.useDispatch();
    const { uid } = react_redux_1.useSelector((state) => state.auth);
    react_1.useEffect(() => {
        dispatch(auth_1.startChecking());
    }, [dispatch]);
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(react_router_dom_1.Switch, null,
            react_1.default.createElement(PublicRoute_1.PublicRoute, { exact: true, path: "/login", component: LoginScreen_1.LoginScreen, isAuthenticated: !!uid }),
            react_1.default.createElement(PublicRoute_1.PublicRoute, { exact: true, path: "/", component: MainScreen_1.MainScreen, isAuthenticated: !!uid }),
            react_1.default.createElement(PrivateRoute_1.PrivateRoute, { exact: true, path: "/admin", component: AdminScreen_1.AdminScreen, isAuthenticated: !!uid }))));
};
exports.AppRouter = AppRouter;
//# sourceMappingURL=AppRouter.js.map