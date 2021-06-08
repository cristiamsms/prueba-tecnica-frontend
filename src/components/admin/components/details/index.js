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
const react_1 = __importStar(require("react"));
require("./style.css");
function Details({ list, setDetails, id, details }) {
    const [edit, setEdit] = react_1.useState(false);
    const [valueInput, setValueInput] = react_1.useState([]);
    const onChange = (event) => {
        setValueInput(event.target.value);
    };
    const save = () => {
        setEdit(!edit);
        console.log(id);
    };
    return (react_1.default.createElement("li", null,
        react_1.default.createElement("i", { className: "fas fa-ellipsis-v" }),
        edit ? (react_1.default.createElement("input", { className: "form-control", defaultValue: list, onChange: (event) => onChange(event), name: list })) : (react_1.default.createElement("span", null, list)),
        react_1.default.createElement("span", null, edit ? (react_1.default.createElement("i", { className: "fas fa-share", onClick: () => {
                save();
            } })) : (react_1.default.createElement("i", { className: "fas fa-pen", onClick: () => {
                setEdit(!edit);
            } }))),
        react_1.default.createElement("span", null,
            react_1.default.createElement("i", { className: "fas fa-trash-alt" }))));
}
exports.default = Details;
//# sourceMappingURL=index.js.map