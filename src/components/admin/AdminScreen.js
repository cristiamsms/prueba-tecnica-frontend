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
exports.AdminScreen = void 0;
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const plans_1 = require("../../actions/plans");
const Navbar_1 = require("../ui/Navbar");
const plans_2 = __importDefault(require("./components/plans"));
require("./style.css");
const AdminScreen = () => {
    let dispatch = react_redux_1.useDispatch();
    const [onCollapse, setOnCollapse] = react_1.useState(false);
    const plan = react_redux_1.useSelector((state) => state.plan);
    const [loading, setloading] = react_1.useState(true);
    const [planes, setplanes] = react_1.useState();
    const [inputs, setInputs] = react_1.useState([]);
    console.log(inputs);
    const [valueInput, setValueInput] = react_1.useState("");
    console.log(plan.planes);
    react_1.useEffect(() => {
        dispatch(plans_1.planStartLoading());
        setloading(false);
    }, [dispatch, planes]);
    const openCollapse = () => {
        setOnCollapse(!onCollapse);
    };
    const Details = () => {
        setInputs(inputs.filter((clean) => clean !== null));
        setInputs([...inputs, ""]);
    };
    const handleSubmit = () => {
        setInputs(inputs.filter((clean) => clean !== null));
        dispatch(plans_1.planStartAddNew(Object.assign(Object.assign({}, planes), { detalle: JSON.stringify(inputs) })));
        openCollapse();
        setplanes({ titulo: "", valor: 0, descripcion: "", detalle: "" });
        setInputs([""]);
    };
    const handleChange = (event) => {
        setValueInput(event.target.value);
    };
    const save = (index) => {
        setInputs(inputs.filter((clean) => clean !== null && clean !== ""));
        setInputs([...inputs, (inputs[index] = valueInput)]);
        setValueInput("");
    };
    const remove = (item) => {
        setInputs(inputs.filter((clean) => clean !== null && clean !== ""));
        setInputs(inputs.filter((remove) => remove !== item));
    };
    const onChange = (event) => {
        setInputs(inputs.filter((clean) => clean !== null && clean !== ""));
        setplanes(Object.assign(Object.assign({}, planes), { [event.target.name]: event.target.value }));
    };
    if (loading) {
        return react_1.default.createElement("h1", null, "cargando");
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Navbar_1.Navbar, null),
        react_1.default.createElement("h1", null, " Planes"),
        plan.planes.map((items, index) => {
            return (items.estado) && react_1.default.createElement(plans_2.default, { key: index, items: items });
        }),
        react_1.default.createElement("p", { className: "add-new", onClick: openCollapse },
            react_1.default.createElement("i", { className: "fas fa-plus-circle" }),
            " a\u00F1adir item nuevo"),
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
                        inputs.map((item, index) => (react_1.default.createElement("li", null,
                            react_1.default.createElement("input", { key: index, onChange: (event) => {
                                    handleChange(event);
                                } }),
                            react_1.default.createElement("i", { className: "fas fa-share", onClick: () => save(index) }),
                            react_1.default.createElement("i", { className: "fas fa-trash-alt", onClick: () => remove(item) })))),
                        react_1.default.createElement("li", { onClick: () => Details() },
                            react_1.default.createElement("p", null,
                                react_1.default.createElement("i", { className: "fas fa-plus-circle" }),
                                " a\u00F1adir item nuevo"))),
                    react_1.default.createElement("button", { className: "button-cancelar", onClick: openCollapse }, "Cancelar"),
                    react_1.default.createElement("button", { type: "button", className: "button-guardar", onClick: handleSubmit }, " Guardar ")))))));
};
exports.AdminScreen = AdminScreen;
//# sourceMappingURL=AdminScreen.js.map