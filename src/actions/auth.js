"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startLogout = exports.startChecking = exports.startLogin = void 0;
const sweetalert2_1 = __importDefault(require("sweetalert2"));
const fetch_1 = require("../components/helpers/fetch");
const types_1 = require("../types/types");
const startLogin = (email, password) => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        const resp = yield fetch_1.fetchSintoken('usuarios', { email, password }, 'POST');
        const body = yield resp.json();
        const tiempo = new Date().getTime();
        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init', tiempo);
            dispatch(login({ uid: body.uid,
                name: body.name }));
        }
        else {
            sweetalert2_1.default.fire('Error', body.msg, 'error');
        }
    });
};
exports.startLogin = startLogin;
const startChecking = () => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        const resp = yield fetch_1.fetchContoken('usuarios/renew', {});
        const body = yield resp.json();
        if (body.ok) {
            dispatch(checkingFinish());
        }
    });
};
exports.startChecking = startChecking;
const checkingFinish = () => ({
    type: types_1.types.authCheckingFinish
});
const login = (user) => ({
    type: types_1.types.authLogin,
    payload: user
});
const startLogout = () => {
    return (dispatch) => {
        localStorage.clear();
        dispatch(logout());
    };
};
exports.startLogout = startLogout;
const logout = () => ({
    type: types_1.types.authLogout
});
//# sourceMappingURL=auth.js.map