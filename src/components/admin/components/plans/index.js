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
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const plans_1 = require("../../../../actions/plans");
const details_1 = __importDefault(require("../details"));
require("./style.css");
function Plans({ items }) {
    const [onCollapse, setOnCollapse] = react_1.useState(false);
    const [planes, setPlanes] = react_1.useState(items);
    const dispatch = react_redux_1.useDispatch();
    const [details, setDetails] = react_1.useState(JSON.parse(planes === null || planes === void 0 ? void 0 : planes.detalle));
    //console.log(details);
    const openCollapse = () => {
        setOnCollapse(!onCollapse);
    };
    const onChange = (event) => {
        setPlanes(Object.assign(Object.assign({}, planes), { [event.target.name]: event.target.value }));
    };
    react_1.useEffect(() => {
        setDetails(JSON.parse(planes === null || planes === void 0 ? void 0 : planes.detalle));
        setPlanes(items);
    }, [items, planes === null || planes === void 0 ? void 0 : planes.detalle]);
    const handleSubmit = () => {
        dispatch(plans_1.planStartUpdated(planes));
        openCollapse();
    };
    const handleDelete = () => {
        dispatch(plans_1.planStartDelete(planes.id));
        openCollapse();
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "card alert-dark", onClick: openCollapse },
            react_1.default.createElement("div", { className: "card-body" },
                onCollapse ? "-" : "+",
                " ", planes === null || planes === void 0 ? void 0 :
                planes.titulo)),
        onCollapse && (react_1.default.createElement("div", null,
            react_1.default.createElement("div", { className: "card card-body" },
                react_1.default.createElement("div", { className: "mb-3" },
                    react_1.default.createElement("label", { htmlFor: "exampleFormControlInput1", className: "form-label" }, "Titulo"),
                    react_1.default.createElement("input", { name: "titulo", type: "text", onChange: (event) => onChange(event), className: "form-control", defaultValue: planes === null || planes === void 0 ? void 0 : planes.titulo })),
                react_1.default.createElement("div", { className: "mb-3" },
                    react_1.default.createElement("label", { htmlFor: "exampleFormControlInput1", className: "form-label" }, "Valor"),
                    react_1.default.createElement("input", { name: "valor", type: "number", onChange: (event) => onChange(event), className: "form-control", defaultValue: planes === null || planes === void 0 ? void 0 : planes.valor })),
                react_1.default.createElement("div", { className: "mb-3" },
                    react_1.default.createElement("label", { htmlFor: "exampleFormControlTextarea1", className: "form-label" }, "Descripcion"),
                    react_1.default.createElement("textarea", { name: "descripcion", onChange: (event) => onChange(event), defaultValue: planes === null || planes === void 0 ? void 0 : planes.descripcion, className: "form-control" })),
                react_1.default.createElement("div", { className: "mb-3" },
                    react_1.default.createElement("p", null, "Lista de detalles"),
                    react_1.default.createElement("ul", null,
                        details.length !== 0
                            ? details.map((list, index) => {
                                return (react_1.default.createElement(details_1.default, { details: details, list: list, key: index, id: index, setDetails: setDetails }));
                            })
                            : JSON.parse(planes === null || planes === void 0 ? void 0 : planes.detalle).map((list, index) => {
                                return (react_1.default.createElement(details_1.default, { details: details, list: list, key: index, id: index, setDetails: setDetails }));
                            }),
                        react_1.default.createElement("li", null,
                            react_1.default.createElement("p", null,
                                react_1.default.createElement("i", { className: "fas fa-plus-circle" }),
                                " a\u00F1adir item nuevo"))),
                    react_1.default.createElement("button", { className: "button-cancelar", onClick: openCollapse }, "Cancelar"),
                    react_1.default.createElement("button", { onClick: handleSubmit, className: "button-guardar" },
                        " ",
                        "guardar"),
                    react_1.default.createElement("button", { type: "button", className: "button-borrar", onClick: handleDelete },
                        " ",
                        "Borrar",
                        " ")))))));
}
exports.default = Plans;
//# sourceMappingURL=index.js.map