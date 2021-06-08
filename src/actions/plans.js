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
exports.planStartDelete = exports.planStartUpdated = exports.planStartLoading = exports.planStartAddNew = void 0;
const sweetalert2_1 = __importDefault(require("sweetalert2"));
const fetch_1 = require("../components/helpers/fetch");
const types_1 = require("../types/types");
const planStartAddNew = (plan) => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const resp = yield fetch_1.fetchSintoken('planes', plan, 'POST');
            const body = yield resp.json();
            if (body.ok) {
                plan.id = body.plan.id;
                dispatch(planAddNew(plan));
            }
        }
        catch (error) {
            console.log(error);
        }
    });
};
exports.planStartAddNew = planStartAddNew;
const planAddNew = (plan) => ({
    type: types_1.types.planAddNew,
    payload: plan
});
const planStartLoading = () => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const resp = yield fetch_1.fetchSintoken('planes', {});
            const body = yield resp.json();
            const planes = body.planes;
            dispatch(planesLoaded(planes));
        }
        catch (error) {
            console.log(error);
        }
    });
};
exports.planStartLoading = planStartLoading;
const planesLoaded = (planes) => ({
    type: types_1.types.planLoaded,
    payload: planes
});
const planStartUpdated = (plan) => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const resp = yield fetch_1.fetchSintoken(`planes/${plan.id}`, plan, 'PUT');
            const body = yield resp.json();
            if (body.ok) {
                dispatch(planUpdated(plan));
            }
            else {
                sweetalert2_1.default.fire('Error', body.msg, 'error');
            }
        }
        catch (error) {
            console.log(error);
        }
    });
};
exports.planStartUpdated = planStartUpdated;
const planUpdated = (plan) => ({
    type: types_1.types.planUpdate,
    payload: plan
});
const planStartDelete = (id) => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const resp = yield fetch_1.fetchSintoken(`planes/${id}`, {}, 'DELETE');
            const body = yield resp.json();
            if (body.ok) {
                dispatch(planDelete());
            }
            else {
                sweetalert2_1.default.fire('Error', body.msg, 'error');
            }
        }
        catch (error) {
            console.log(error);
        }
    });
};
exports.planStartDelete = planStartDelete;
const planDelete = () => ({
    type: types_1.types.planDeleted
});
//# sourceMappingURL=plans.js.map